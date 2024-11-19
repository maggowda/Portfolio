import React from 'react'
import Navbar from '../components/navbar';

const classes = {
  container: 'flex flex-col items-center h-screen bg-black',
}
function Landing() {
  return (
    <div className={classes.container}>
      <Navbar/>
    </div>
  )
}

export default Landing;