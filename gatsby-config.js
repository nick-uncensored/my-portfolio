/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Hank Portfolio`,
    description: `A website for Hank  `,
    siteUrl: `https://blissful-golick-9fbc8e.netlify.app/`,
    home: {
      title: `My name is Hank and this is my portfolio`,
      description: `I just finished a coding boot camp and am now ready to start my first job`,
    },
    /* W3Layouts domain verification key for contact forms https://my.w3layouts.com/Forms/ */
    w3l_dom_key: `5e609f7a2d23fCF_Domain_verify` 
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
  ],
}
