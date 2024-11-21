import React, { useEffect, useRef } from 'react';
import Landing from './pages/landing';
import Navbar from './components/navbar';
import Footer from './components/footer';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

const classes = {
  container: 'flex flex-col justify-between items-center bg-black text-white w-full',
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
    <div className={classes.container}>
      <Navbar />
    <div data-scroll-container ref={scrollRef}>
      <Landing />
      <Footer />
    </div>
    </div>
  );
}

export default App;