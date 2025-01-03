import React from 'react';
import { Link } from 'react-router-dom';
import mag from '../assets/images/mag.svg';
import About from './about';
import Contact from './contact';

const classes = {
  container: 'font-mono fixed top-0 h-[40px]  sm:h-[40px] md:h-[60px] md:w-[95%] lg:w-[85%] left-0 right-0 flex mt-[20px] mx-auto sm:px-0 sm:w-[95%] px-4 rounded-[30px] bg-white/3 backdrop-blur-md lg:h-[60px] w-[97%] justify-between items-center z-[1000]',
  container1: 'flex justify-around items-center text-[8px] sm:text-[9px] md:text-[16px] lg:text-[16px]',
  item: 'cursor-pointer text-white px-2 lg:px-4 sm:px-2 md:px-2 pb-[6px] pt-[5px] hover:bg-white/20 hover:backdrop-blur-sm hover:text-white rounded-[10px]',
  img: 'lg:h-[60px] md:h-[60px] md:w-[150px] lg:w-[150px] h-[60px] w-[80px] sm:h-[70px] sm:w-[90px] cursor-pointer mix-blend-multiply',
};

function Navbar() {
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <Link to="/"><img src={mag} className={classes.img} alt="Logo" /></Link>
      </div>
      <div className={classes.container1}>
        <div><About/></div>
        <Link to="/engineer" className={classes.item}>Engineer</Link>
        <Link to="/projects" className={classes.item}>Projects</Link>
        <div><Contact/></div>
      </div>
    </div>
  );
}

export default Navbar;