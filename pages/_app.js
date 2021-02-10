import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import ThemeProvider from '../theme/themeProvider'
import { CookiesProvider } from 'react-cookie'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])
  return (
    <Fragment>
      <Head>
        <title>Resume</title>
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
