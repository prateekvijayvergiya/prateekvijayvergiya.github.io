const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://prateekvijayvergiya.github.io' : '',
  env: {
    serviceId: process.env.NEXT_PUBLIC_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    userId: process.env.NEXT_PUBLIC_USER_ID,
  },
  
}