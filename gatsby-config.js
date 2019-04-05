module.exports = {
  siteMetadata: {
    title: "Scatterbeam Web Development Dojo",
    author: "John Moen",
    description:
      "A blog about web development and trying to get my first front-end developer job",
    siteUrl: "https://www.scatterbeam.com"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Scatterbeam Web Development Dojo`,
        short_name: `Scatterbeam`,
        start_url: `/`,
        background_color: `#f1f2eb`,
        theme_color: `#6fffe9`,
        display: `minimal-ui`,
        icon: `src/assets/iconfinder_Newsvine_128x128_10922.png`
      }
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utilities/typography"
      }
    }
    // 'gatsby-plugin-offline',
  ]
};
