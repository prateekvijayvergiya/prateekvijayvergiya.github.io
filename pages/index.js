import React, { Fragment, useState } from 'react'
import Contact from '../components/contact'
import AppFooter from '../components/footer'
import HomePage from '../components/home'
import NavBar from '../components/navBar'
import Resume from '../components/resume'
import Spacer from '../components/spacer'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  return (
    <Fragment>
      <div id='navBar'>
        <NavBar {...{ setCurrentPage, currentPage }} />
      </div>
      <div id='content'>
        {currentPage === 'home' && <HomePage {...{ setCurrentPage }} />}
        {currentPage === 'resume' && <Resume {...{ setCurrentPage }} />}
        {currentPage === 'contact' && <Contact />}
        <Spacer spacing={7} />
      </div>
      <div id='footer'>
        <AppFooter />
      </div>
    </Fragment>
  )
}
