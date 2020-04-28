import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss'

export default function Template({ children }) {
  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "deb.jpg"}) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
  }  
  `)

  return (
    <div>
      <Helmet
        title="Deborah Hayon"
        meta={[{ name: 'description', content: '' }, { name: 'keywords', content: '' }]}
      />
      <div class="parallax">
        <div class="parallax__layer parallax__layer--back">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div class="parallax__layer parallax__layer--base">
          <div
            style={{
              background: `rebeccapurple`
            }}
          >
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.75vw 1.0875rem`
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
              padding: `6vw 1.0875rem 1.45rem`,
              backgroundColor: `#2828283d`
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
