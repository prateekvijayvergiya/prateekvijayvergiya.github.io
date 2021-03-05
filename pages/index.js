import React, { Fragment, useEffect, useState } from 'react'
import * as R from 'ramda'
import { useCookies } from 'react-cookie'

import Contact from '../components/contact'
import AppFooter from '../components/footer'
import HomePage from '../components/home'
import NavBar from '../components/navBar'
import Spacer from '../components/spacer'
import WelcomeGreetings from '../components/welcome'
import Skills from '../components/skills'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  const [cookies, setCookie] = useCookies(['portfolio'])
  const [canShowGreeting, setCanShowGreeting] = useState(false)

  const showGreetingsAndUpdateCookies = () => {
    setCanShowGreeting(true)
    const date = new Date();
    date.setDate(date.getDate() + 30)
    setCookie('portfolio', 'portfolio', { path: '/', expires: date })
  }

  useEffect(() => {
    R.isEmpty(cookies) ? showGreetingsAndUpdateCookies() : setCanShowGreeting(false)
  }, [])

  return (
    <Fragment>
      <WelcomeGreetings {...{ canShowGreeting, setCanShowGreeting }} />
      <div id='navBar'>
        <NavBar {...{ setCurrentPage, currentPage }} />
      </div>
      <div id='content'>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'resume' && <Skills />}
        {currentPage === 'contact' && <Contact />}
        <Spacer spacing={7} />
      </div>
      <div id='footer'>
        <AppFooter />
      </div>
    </Fragment>
  )
}