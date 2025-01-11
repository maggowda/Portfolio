import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import BackToTop from './components/backToTop';
import Landing from './pages/landing';
import Engineer from './pages/engineer';
import Projects from './pages/projects';
import Navbar from './components/navbar';
import Footer from './components/footer';
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTop from './components/scrollTop';

const classes = {
  container: 'flex flex-col w-screen justify-between items-center bg-black text-white',
};

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
      <div data-scroll-speed="-1" className={classes.container}>
        <Router>
          <ScrollTop/>
          <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/engineer" element={<Engineer />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
            <BackToTop />
        </Router>
      </div>
  );
}

export default App;