import React from 'react'
import Navbar from '../components/navbar';

const classes = {
  container: 'flex flex-col items-center h-screen bg-black text-white',
}
function Landing() {
  return (
    <div className={classes.container}>
      <Navbar/>
      <h1>Megharsha <br/>A Gowda</h1>
    </div>
  )
}

export default Landing;