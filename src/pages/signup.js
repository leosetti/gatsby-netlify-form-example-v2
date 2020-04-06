import React from 'react'
import { navigate } from 'gatsby-link'
import Recaptcha from 'react-google-recaptcha'
import Layout from '../layout'
import config from 'gatsby-plugin-config';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Signup = () => {
  const [state, setState] = React.useState({})
  //const recaptchaRef = React.createRef()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const recaptchaValue = recaptchaRef.current.getValue()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        //'g-recaptcha-response': recaptchaValue,
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
        //data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <TextField required name="name" label="Your name" defaultValue="" onChange={handleChange} />

        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message 2:
            <br />
            <textarea name="message2" onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default Signup;