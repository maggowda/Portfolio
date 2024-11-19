import React from 'react'
import Landing from './pages/landing'
import Navbar from './components/navbar';
import Footer from './components/footer'; 

const classes={
  container:'flex flex-col justify-between items-center bg-black text-white',
}
function App() {
  return (
    <div className={classes.container}>
      <Navbar/>
      <Landing/>
      <Footer/>
    </div>
  )
}

export default App;