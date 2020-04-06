
// Initialize dotenv
require('dotenv').config({
  path: `.env`, // or '.env'
});

// And then you can use the config in gatsby-config.js
const config = require('gatsby-plugin-config');

module.exports = {
  siteMetadata: {
    title: `Gatsby Netlify Form Integration`
  },
  plugins: [`gatsby-plugin-react-helmet`]
};
