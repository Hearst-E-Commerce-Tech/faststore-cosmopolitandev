
module.exports = {
  seo: {
  "title": "Cosmopolitan Shop",
  "description": "Cosmopolitan Shop",
  "titleTemplate": "%s | Cosmopolitan Shop",
  "author": "Cosmopolitan Shop"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "cosmopolitandev",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "USD",
      symbol: "$",
    },
    locale: "en-US",
    channel: '{"salesChannel":4,"regionId":""}',
    country: "USA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://cosmopolitandev.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/cc1",
    search: "/s?q=Test%20Brand%20name",
    pdp: "/adidas-halfshells-new-york-1695388119837/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/adidas-halfshells-new-york-1695388119837/p",
      collection: "/cc1",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/adidas-halfshells-new-york-1695388119837/p",
      collection: "/cc1",
      collection_filtered: "/cc1/?category-1=cc1&brand=Test%20Brand%20name&facets=category-1%2Cbrand%27",
      search: "/s?q=Test%20Brand%20name",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://cosmopolitandev.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
