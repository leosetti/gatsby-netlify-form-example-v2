
// Initialize dotenv
require('dotenv').config({
  path: `.env`, // or '.env'
});

// And then you can use the config in gatsby-config.js
const config = require('gatsby-plugin-config');

module.exports = {
  siteMetadata: {
    title: `Deborah Hayon`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-recaptcha`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    }
  ]
};
