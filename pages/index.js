import React, { Fragment, useState } from 'react'
import AppFooter from '../components/footer'
import HomePage from '../components/home'
import NavBar from '../components/navBar'
import Resume from '../components/resume'
import Spacer from '../components/spacer'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  console.log(currentPage)
  return (
    <Fragment>
      <NavBar {...{setCurrentPage}}/>
      {currentPage === 'home' && <HomePage {...{setCurrentPage}}/>}
      {currentPage === 'resume' && <Resume {...{setCurrentPage}}/>}
      <Spacer spacing={7}/>
      <AppFooter/>
    </Fragment>
  )
}
