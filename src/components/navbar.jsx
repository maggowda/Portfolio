import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='justify-end flex flex-row gap-4 bg-amber-400'>
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Resume">Resume</a>
        <a href="/Projects">Projects</a>
        <a href="/Contact">Contact</a>
    </div>
  )
}

export default Navbar;