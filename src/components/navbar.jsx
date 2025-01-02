import React from 'react';
import { Link } from 'react-router-dom';
import mag from '../assets/images/mag.svg';
import About from './about';
import Contact from './contact';

const classes = {
  container: 'font-mono fixed top-0 left-0 right-0 flex mt-[20px] mx-auto px-4 rounded-[30px] bg-white/3 backdrop-blur-md h-[60px] w-[90%] justify-between items-center z-[1000]',
  container1: 'flex justify-around items-center max-sm:text-[10px] lg:text-[16px]',
  item: 'cursor-pointer text-white px-4 pb-[6px] pt-[5px] hover:bg-white/20 hover:backdrop-blur-sm hover:text-white rounded-[10px]',
  img: 'h-[60px] w-[150px] max-sm:h-[45px] max-sm:w-[65px] cursor-pointer mix-blend-multiply',
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