import React, { useState } from 'react'
import NavBar from '../components/navBar'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  console.log(currentPage)
  return (
    <NavBar {...{setCurrentPage}}/>
  )
}
