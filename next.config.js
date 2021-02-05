const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://prateekvijayvergiya.github.io' : '',
  env: {
    serviceId: process.env.REACT_APP_SERVICE_ID,
    templateId: process.env.REACT_APP_TEMPLATE_ID,
    userId: process.env.REACT_APP_USER_ID,
  },
}