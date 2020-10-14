require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Juneshine`,
    logo: `/images/Logo.png`,
    altLogo: `src/images/Logo.png`,
    description: `For a limited-time, build your own 6-pack`,
    image: `src/images/dome.jpg`,
    author: `@aliiiiza`,
    address: {
      street: `1375 South 500 East`,
      city: `American Fork`,
      zip: `84003`,
      state: `UT`,
    },
    socials: {
      instagram: `@juneshineco`,
      twitter: `@juneshinenorthpark`,
      facebook: `@juneshinenorthpark`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // replace "UA-XXXXXXXXX-X" with your own Tracking ID
    //     trackingId: 'UA-17466510-1',
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: '528764760636492',
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.webp`,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
        // accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        // apiVersion: "2020-04",
        // verbose: true
         // The domain name of your Shopify shop.
        shopName: `juneshine-delivery`,
        // The storefront access token
        accessToken: `64e476892aa9edf69e9ba4fbecd331a6`,
        apiVersion: "2020-01",
        verbose: true,
        paginationSize: 30,
        includeCollections: ["shop", "content"],
      },
    },
  ],
}
