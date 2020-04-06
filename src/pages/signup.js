import React, {useState} from 'react';
import { navigate } from 'gatsby-link';
import Recaptcha from 'react-recaptcha';
import getValidationErrors from '../helpers/validationHelper'
import config from 'gatsby-plugin-config';
import Layout from '../layout';
import Typography from '@material-ui/core/Typography';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button  from 'react-bootstrap/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Joi from "joi-browser";
import messages from '../errors/messages.json';
import 'typeface-roboto';

let ENV_RECAPTCHA_KEY = null;
if (config.IS_STAGING) {
  ENV_RECAPTCHA_KEY = config.GATSBY_APP_SITE_RECAPTCHA_KEY;
}
const NETLIFY_RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY
const RECAPTCHA_KEY = ENV_RECAPTCHA_KEY || NETLIFY_RECAPTCHA_KEY;
if (typeof RECAPTCHA_KEY === 'undefined') {
  throw new Error(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  Note this demo is specifically for Recaptcha v2
  `)
}

const encode = data => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}



const Signup = () => {
  const [state, setState] = React.useState({})
  const [verified, setVerified] = useState(false);
  const [verifyValidateError, setVerifyValidateError] = useState(false);
  const [validateErrors, setValidateErrors] = useState(null);

  const verifyCallback = function (response) {
    if(response) setVerified(true);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const schemaKeys = { 
    name: Joi.string().min(2).max(50).required(),
    age: Joi.number().required(),
    gender: Joi.string().required()
  };
  let schema = Joi.object().keys(schemaKeys).options({abortEarly: false});

  let borderClass1 = "", borderClass2 = "", borderClass3 = "";
  let validateError1 = false, validateError2 = false, validateError3 = false;
  if(validateErrors !== null && validateErrors.name !== undefined && validateErrors.name !== null){
    borderClass1 = "border border-danger";
    validateError1 = true;
  }
  if(validateErrors !== null && validateErrors.age !== undefined && validateErrors.age !== null){
    borderClass2 = "border border-danger";
    validateError2 = true;
  }
  if(validateErrors !== null && validateErrors.gender !== undefined && validateErrors.gender !== null){
    borderClass3 = "border border-danger";
    validateError3 = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;

    if(verified){
      setVerifyValidateError(false);
    }else{
      setVerifyValidateError(true);
    }

    let err = null;
    err = getValidationErrors(schema, state);
    console.log(`err=${JSON.stringify(err)}`)
    setValidateErrors(err);
    if(err !== null||!verified){
      return null;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <Typography variant="h4" component="h1">
      Questionnaire : Online Coaching Application 
      </Typography>
      <Typography variant="h5" component="h2">
      (8 weeks program 399$) 
      </Typography>
      <Typography variant="body1" component="p">
      Hey beautiful creature!
      </Typography>
      <Typography variant="body1" component="p">
      If you landed here through my Instagram, it’s because you already know a little bit about me. 
      </Typography>
      <Typography variant="body1" component="p">
      Now its my turn to get to know You! 
      </Typography>
      <Typography variant="body1" component="p">
      As your coach, it is important for me to ask you all the right questions so I can get an accurate and well rounded idea of your current lifestyle, your habits, your previous methods used, as well as any prior injuries you might have. I also want to know your motivation for wanted to embark on this journey as well as anything that makes you who you are today! 
      </Typography>
      <Typography variant="body1" component="p">
      Please answer every question as honestly as you can and as detailed as possible. This way, we can see if we are a good fit to work together on your goals. 
      </Typography>
      <Typography variant="body1" component="p">
      Thanks and talk soon! 
      </Typography>
      <Typography variant="body1" component="p">
      Deborah
      </Typography>
 
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <Row>
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Your name</Form.Label>
              <Form.Control 
                className={borderClass1} 
                type="text" 
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            {validateError1 && (
              <Alert variant={'danger'}>{messages[validateErrors.name.msg]}</Alert>
            )}
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control 
                className={borderClass2} 
                type="number" 
                name="age"
                onChange={handleChange}
              />
            </Form.Group>
            {validateError2 && (
              <Alert variant={'danger'}>{messages[validateErrors.age.msg]}</Alert>
            )}
          </Col>
          <Col md={6}>
            <FormControl component="fieldset">
              <Form.Label>Gender</Form.Label>
              <RadioGroup aria-label="gender" name="gender" onChange={handleChange} row>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
            {validateError3 && (
              <Alert variant={'danger'}>{messages[validateErrors.gender.msg]}</Alert>
              )}
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Recaptcha
              sitekey={RECAPTCHA_KEY}
              verifyCallback={verifyCallback}
            />
            {verifyValidateError && (
              <Alert variant={'danger'}>Please check this box to prove you are not a robot</Alert>
            )} 
          </Col>
        </Row>   
              
        <Button variant="primary" type="submit">
          Submit
        </Button>
       
      </form>
    </Layout>
  )
}

export default Signup;