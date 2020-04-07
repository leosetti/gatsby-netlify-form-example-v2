import React, {useState} from 'react';
import { navigate } from 'gatsby-link';
import Recaptcha from 'react-recaptcha';
import getValidationErrors from '../helpers/validationHelper'
import config from 'gatsby-plugin-config';
import Layout from '../layout';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button  from 'react-bootstrap/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';

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
    gender: Joi.string().required(),
    email: Joi.string().required().email(),
    instagram: Joi.string().required(),
    height: Joi.number().required(),
    weight: Joi.number().required(),
    conditions: Joi.string().required(),
    medications: Joi.string().required(),
    risk: Joi.string().required(),
    injuries: Joi.string().required(),
    cleared: Joi.string().required(),
    activity: Joi.string().required(),
    location: Joi.string().required(),
    experience: Joi.string().required(),
    pr: Joi.string().required(),
    worked: Joi.string().required(),
    time: Joi.number().required(),
    eating: Joi.string().required(),
    restrictions: Joi.string().required(),
    shortTermGoal: Joi.string().required(),
    longTermGoal: Joi.string().required(),
    expectations: Joi.string().required(),
    ready: Joi.string().required(),
    remarks: Joi.string().optional()
  };
  let schema = Joi.object().keys(schemaKeys).options({abortEarly: false});

  let borderClass1 = "", borderClass2 = "", borderClass4 = "", borderClass5 = "", borderClass6 = "", borderClass7 = "",
    borderClass8 = "", borderClass9 = "", borderClass11 = "", borderClass13="", borderClass14="", borderClass15="",
    borderClass16="", borderClass17="", borderClass18="", borderClass19="", borderClass20="", borderClass21="", borderClass22="", borderClass23="";
  let validateError1 = false, validateError2 = false, validateError3 = false, validateError4 = false, validateError5 = false, validateError6 = false, validateError7 = false,
    validateError8 = false, validateError9 = false, validateError10 = false, validateError11 = false, validateError12 = false, validateError13 = false, 
    validateError14 = false, validateError15 = false, validateError16 = false, validateError17 = false, validateError18 = false, validateError19 = false,
    validateError20 = false, validateError21 = false, validateError22 = false, validateError23 = false, validateError24 = false;
  if(validateErrors !== null && validateErrors.name !== undefined && validateErrors.name !== null){
    borderClass1 = "border border-danger";
    validateError1 = true;
  }
  if(validateErrors !== null && validateErrors.age !== undefined && validateErrors.age !== null){
    borderClass2 = "border border-danger";
    validateError2 = true;
  }
  if(validateErrors !== null && validateErrors.gender !== undefined && validateErrors.gender !== null){
    validateError3 = true;
  }
  if(validateErrors !== null && validateErrors.email !== undefined && validateErrors.email !== null){
    borderClass4 = "border border-danger";
    validateError4 = true;
  }
  if(validateErrors !== null && validateErrors.instagram !== undefined && validateErrors.instagram !== null){
    borderClass5 = "border border-danger";
    validateError5 = true;
  }
  if(validateErrors !== null && validateErrors.height !== undefined && validateErrors.height !== null){
    borderClass6 = "border border-danger";
    validateError6 = true;
  }
  if(validateErrors !== null && validateErrors.weight !== undefined && validateErrors.weight !== null){
    borderClass7 = "border border-danger";
    validateError7 = true;
  }
  if(validateErrors !== null && validateErrors.conditions !== undefined && validateErrors.conditions !== null){
    borderClass8 = "border border-danger";
    validateError8 = true;
  }
  if(validateErrors !== null && validateErrors.medications !== undefined && validateErrors.medications !== null){
    borderClass9 = "border border-danger";
    validateError9 = true;
  }
  if(validateErrors !== null && validateErrors.risk !== undefined && validateErrors.risk !== null){
    validateError10 = true;
  }
  if(validateErrors !== null && validateErrors.injuries !== undefined && validateErrors.injuries !== null){
    borderClass11 = "border border-danger";
    validateError11 = true;
  }
  if(validateErrors !== null && validateErrors.cleared !== undefined && validateErrors.cleared !== null){
    validateError12 = true;
  }
  if(validateErrors !== null && validateErrors.activity !== undefined && validateErrors.activity !== null){
    borderClass13 = "border border-danger";
    validateError13 = true;
  }
  if(validateErrors !== null && validateErrors.location !== undefined && validateErrors.location !== null){
    borderClass14 = "border border-danger";
    validateError14 = true;
  }
  if(validateErrors !== null && validateErrors.experience !== undefined && validateErrors.experience !== null){
    borderClass15 = "border border-danger";
    validateError15 = true;
  }
  if(validateErrors !== null && validateErrors.pr !== undefined && validateErrors.pr !== null){
    borderClass16 = "border border-danger";
    validateError16 = true;
  }
  if(validateErrors !== null && validateErrors.worked !== undefined && validateErrors.worked !== null){
    borderClass17 = "border border-danger";
    validateError17 = true;
  }
  if(validateErrors !== null && validateErrors.time !== undefined && validateErrors.time !== null){
    borderClass18 = "border border-danger";
    validateError18 = true;
  }
  if(validateErrors !== null && validateErrors.eating !== undefined && validateErrors.eating !== null){
    borderClass19 = "border border-danger";
    validateError19 = true;
  }
  if(validateErrors !== null && validateErrors.restrictions !== undefined && validateErrors.restrictions !== null){
    borderClass20 = "border border-danger";
    validateError20 = true;
  }
  if(validateErrors !== null && validateErrors.shortTermGoal !== undefined && validateErrors.shortTermGoal !== null){
    borderClass21 = "border border-danger";
    validateError21 = true;
  }
  if(validateErrors !== null && validateErrors.longTermGoal !== undefined && validateErrors.longTermGoal !== null){
    borderClass22 = "border border-danger";
    validateError22 = true;
  }
  if(validateErrors !== null && validateErrors.expectations !== undefined && validateErrors.expectations !== null){
    borderClass23 = "border border-danger";
    validateError23 = true;
  }
  if(validateErrors !== null && validateErrors.ready !== undefined && validateErrors.ready !== null){
    validateError24 = true;
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
      <Row>
        <Col>
          <Card>
            <CardContent>
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
            </CardContent>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardContent>
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
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.name.msg]}</Alert>
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
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.age.msg]}</Alert>
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
                  <Col>
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                        className={borderClass4} 
                        type="text" 
                        name="email"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    {validateError4 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.email.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="instagram">
                      <Form.Label>Instagram account</Form.Label>
                      <Form.Control 
                        className={borderClass5} 
                        type="text" 
                        name="instagram"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    {validateError5 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.instagram.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="height">
                      <Form.Label>Height : cm</Form.Label>
                      <Form.Control 
                        className={borderClass6} 
                        type="number" 
                        name="height"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    {validateError6 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.height.msg]}</Alert>
                    )}
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="weight">
                      <Form.Label>Weight : kg</Form.Label>
                      <Form.Control 
                        className={borderClass7} 
                        type="number" 
                        name="weight"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    {validateError7 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.weight.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="conditions">
                      <Form.Label>Do you have any medical conditions? </Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="conditions"
                        onChange={handleChange}
                        className={borderClass8} 
                      />
                    </Form.Group>
                    {validateError8 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.conditions.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="medications">
                      <Form.Label>Are you currently taking any medications? If yes, what are the side effects associated with it?</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="medications"
                        onChange={handleChange}
                        className={borderClass9} 
                      />
                    </Form.Group>
                    {validateError9 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.medications.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormControl component="fieldset">
                      <Form.Label>As far as you know, are you at an increased risk for heart disease and/or high blood pressure? </Form.Label>
                      <RadioGroup aria-label="risk" name="risk" onChange={handleChange} row>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        <FormControlLabel value="notsure" control={<Radio />} label="I am not sure" />
                      </RadioGroup>
                    </FormControl>
                    {validateError10 && (
                      <Alert variant={'danger'}>{messages[validateErrors.risk.msg]}</Alert>
                      )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="injuries">
                      <Form.Label>Do you have any existing or previous injuries? If yes, please describe the nature of injury.</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="injuries"
                        onChange={handleChange}
                        className={borderClass11} 
                      />
                    </Form.Group>
                    {validateError11 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.injuries.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormControl component="fieldset">
                      <Form.Label>Has your doctor cleared you to exercise?</Form.Label>
                      <RadioGroup aria-label="cleared" name="cleared" onChange={handleChange} row>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        <FormControlLabel value="notsure" control={<Radio />} label="I am not sure" />
                      </RadioGroup>
                    </FormControl>
                    {validateError12 && (
                      <Alert variant={'danger'}>{messages[validateErrors.cleared.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormControl component="fieldset" className="paddedBottom">
                      <Form.Label>What is your current activity level? </Form.Label>
                      <Select
                        native
                        onChange={handleChange}
                        inputProps={{
                          name: 'activity',
                          id: 'activity',
                        }}
                        className={borderClass13} 
                      >
                        <option value={null}>Please choose</option>
                        <option value={'sedentary'} title="(ex : you might work a desk job, with little to no physical activity)">Sedentary</option>
                        <option value={'slythly'} title="(ex : a job requiring yo to stand most of the day, or you enjoy going for long walks)">Slighty Active</option>
                        <option value={'active'} title="(ex : you go to the gym or enjoy a favourite sport 2-4 times a week)">Active</option>
                        <option value={'extremely'} title="(ex : you’re challenging your body and sweating hard 5+ times /week)">Extremely Active</option>
                      </Select>
                      {validateError13 && (
                        <Alert variant={'danger'}>{messages[validateErrors.activity.msg]}</Alert>
                      )}
                    </FormControl>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormControl component="fieldset" className="paddedBottom">
                      <Form.Label>Where would you be working out?</Form.Label>
                      <Select
                        native
                        onChange={handleChange}
                        inputProps={{
                          name: 'location',
                          id: 'location',
                        }}
                        className={borderClass14} 
                      >
                        <option value={null}>Please choose</option>
                        <option value={'commercial-gym'}>Commercial</option>
                        <option value={'small-gym'}>Smaller gym </option>
                        <option value={'home'}>At home</option>
                        <option value={'other'}>Other</option>
                      </Select>
                      {validateError14 && (
                        <Alert variant={'danger'}>{messages[validateErrors.location.msg]}</Alert>
                      )}
                    </FormControl>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="experience">
                      <Form.Label>Do you have any experience with any form of training before? If yes, what kind? <br/>
                      Ex : Spin class, boxing, weight training, yoga… </Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="experience"
                        onChange={handleChange}
                        className={borderClass15} 
                      />
                    </Form.Group>
                    {validateError15 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.experience.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="pr">
                      <Form.Label>If you have lifting experience, are there any PRs (ex : bench, squat, deadlift, hip thrust) you would like to share with me? 
                        This can help me evaluate your lifting experience/history (If you dont have any experience, simply write n/a) </Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="pr"
                        onChange={handleChange}
                        className={borderClass16} 
                      />
                    </Form.Group>
                    {validateError16 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.pr.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="worked">
                      <Form.Label>Have you worked with a trainer before?</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="worked"
                        onChange={handleChange}
                        className={borderClass17} 
                      />
                    </Form.Group>
                    {validateError17 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.worked.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormControl component="time" className="paddedBottom">
                      <Form.Label>What is your training time : </Form.Label>
                      <Select
                        native
                        onChange={handleChange}
                        inputProps={{
                          name: 'time',
                          id: 'time',
                        }}
                        className={borderClass18} 
                      >
                        <option value={null}>Please choose</option>
                        <option value={45}>45 minutes</option>
                        <option value={60}>60 minutes</option>
                        <option value={90}>90 minutes</option>
                        <option value={120}>120 minutes</option>
                      </Select>
                      {validateError18 && (
                        <Alert variant={'danger'}>{messages[validateErrors.time.msg]}</Alert>
                      )}
                    </FormControl>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="eating">
                      <Form.Label>What is a typical day of eating like currently look like? (Breakfast, lunch, dinner, drinks, snacks)?</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="eating"
                        onChange={handleChange}
                        className={borderClass19} 
                      />
                    </Form.Group>
                    {validateError19 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.eating.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="restrictions">
                      <Form.Label>Do you have any food restrictions? Ex : allergies, vegan, etc.</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="restrictions"
                        onChange={handleChange}
                        className={borderClass20} 
                      />
                    </Form.Group>
                    {validateError20 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.restrictions.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="shortTermGoal">
                      <Form.Label>What is your short term goal? </Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="shortTermGoal"
                        onChange={handleChange}
                        className={borderClass21} 
                      />
                    </Form.Group>
                    {validateError21 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.shortTermGoal.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="longTermGoal">
                      <Form.Label>What is your long term goal? </Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="longTermGoal"
                        onChange={handleChange}
                        className={borderClass22} 
                      />
                    </Form.Group>
                    {validateError22 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.longTermGoal.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="expectations">
                      <Form.Label>What do you expect from me as your online coach? </Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="expectations"
                        onChange={handleChange}
                        className={borderClass23} 
                      />
                    </Form.Group>
                    {validateError23 && (
                      <Alert className="top" variant={'danger'}>{messages[validateErrors.expectations.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormControl component="fieldset">
                      <Form.Label>Are you READY and COMMITTED to making a change in your lifestyle at this point in time? </Form.Label>
                      <RadioGroup aria-label="ready" name="ready" onChange={handleChange} row>
                        <FormControlLabel value="yes" control={<Radio />} label="YES! I am ready, lets freakin do this! " />
                        <FormControlLabel value="notsure" control={<Radio />} label="I am not sure yet. " />
                      </RadioGroup>
                    </FormControl>
                    {validateError24 && (
                      <Alert variant={'danger'}>{messages[validateErrors.ready.msg]}</Alert>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="remarks">
                      <Form.Label>Anything else you want to add? </Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="remarks"
                        onChange={handleChange}
                      />
                    </Form.Group>
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
                <Row>
                  <Col className="center">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>    
              </form>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Signup;