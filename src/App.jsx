import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import Landing from './pages/landing';
import Engineer from './pages/engineer';
import Projects from './pages/projects';
import Contact from './components/contact';
import About from './components/about';
import Navbar from './components/navbar';
import Footer from './components/footer';

const classes = {
  container: 'flex flex-col justify-between items-center bg-black text-white',
};

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <Router>
      <div className={classes.container}>
        <Navbar />
        <div data-scroll-container ref={scrollRef}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/engineer" element={<Engineer />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;