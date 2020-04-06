import React from 'react'
import { navigate } from 'gatsby-link'
import Recaptcha from 'react-google-recaptcha'
import Layout from '../layout'
import config from 'gatsby-plugin-config';

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

export default function Contact() {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
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
      <h1>Contact</h1>
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
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
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
        <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}
