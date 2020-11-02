import React, { Fragment, useState } from 'react'
import HomePage from '../components/home'
import NavBar from '../components/navBar'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  console.log(currentPage)
  return (
    <Fragment>
      <NavBar {...{setCurrentPage}}/>
      {currentPage === 'home' && <HomePage {...{setCurrentPage}}/>}
    </Fragment>
  )
}
