import React from 'react';
import { Link } from 'react-router-dom';
import mag from '../assets/images/mag.svg';
import About from './about';
import Contact from './contact';
import { motion } from 'framer-motion';

const classes = {
  container: 'font-mono fixed top-0 h-[40px]  sm:h-[40px] md:h-[60px] md:w-[95%] lg:w-[85%] left-0 right-0 flex mt-[20px] mx-auto sm:px-0 sm:w-[95%] px-4 rounded-[30px] bg-white/3 backdrop-blur-md lg:h-[60px] w-[97%] justify-between items-center z-[1000]',
  container1: 'flex justify-around items-center text-[10px] sm:text-[10px] md:text-[16px] lg:text-[16px]',
  item: 'cursor-pointer text-white px-2 lg:px-4 sm:px-2 md:px-2 pb-[6px] pt-[5px] hover:bg-white/20 hover:backdrop-blur-sm hover:text-white rounded-[10px]',
  img: 'lg:h-[60px] md:h-[60px] md:w-[150px] lg:w-[150px] h-[60px] w-[80px] sm:h-[70px] sm:w-[90px] cursor-pointer mix-blend-multiply',
};

const fromTop = {
  hidden: { y: -30, opacity: 0, scale: 0.7 },
  show: { y: 0, opacity: 1 , scale:1,
    transition: {
      duration: 0.8,
      delay: 0,
      ease: 'easeInOut',
    }
  }
}

function Navbar() {
  return (
    <motion.div variants={fromTop} initial='hidden' animate='show' className={classes.container}>
      <div className={classes.container1}>
        <motion.div whileTap={{scale: 0.9}} whileHover={{scale:1.1}}><Link to="/"><img src={mag} className={classes.img} alt="Logo" /></Link></motion.div>
      </div>
      <motion.div className={classes.container1}>
        <motion.div whileTap={{scale: 0.9}} whileHover={{scale:1.05}}><About/></motion.div>
        <motion.div whileTap={{scale: 0.9}} whileHover={{scale:1.05}}><Link to="/engineer" className={classes.item}>Engineer</Link></motion.div>
        <motion.div whileTap={{scale: 0.9}} whileHover={{scale:1.05}}><Link to="/projects" className={classes.item}>Projects</Link></motion.div>
        <motion.div whileTap={{scale: 0.9}} whileHover={{scale:1.05}}><Contact/></motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;