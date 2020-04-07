import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

//import './css/typography.css'
//import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss'

export default function Template({ children }) {
  return (
    <div>
      <Helmet
        title="Deborah Hayon"
        meta={[{ name: 'description', content: '' }, { name: 'keywords', content: '' }]}
      />
      <div
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              @deb_does_fit
            </Link>
          </h1>
        </div>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {children}
      </div>
    </div>
  )
}
