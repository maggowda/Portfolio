import React, { useState, useEffect } from 'react';
import Top from '../assets/images/top.svg';
import { motion } from 'framer-motion';

const classes = {
    button: 'fixed lg:bottom-[60px] lg:right-[50px] md:bottom-[60px] md:right-[10px] sm:bottom-[50px] sm:right-[5px] bottom-[50px] right-[5px]',
    img: 'lg:w-[90px] lg:h-[90px] md:w-[70px] md:h-[70px] sm:w-[20px] sm:h-[20px] w-[50px] h-[50px] bg-black rounded-full',
}

const backToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className={classes.button} onClick={scrollToTop}><img className={classes.img} src={Top}/></motion.button>
      )}
    </div>
  );
};

export default backToTop;