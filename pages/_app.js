import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import ThemeProvider from '../theme/themeProvider'
import { CookiesProvider } from 'react-cookie'

import posthog from 'posthog-js'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_ID, { api_host: 'https://app.posthog.com' })
    }
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])
  return (
    <Fragment>
      <Head>
        <title>Prateek Vijayvergiya</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp
