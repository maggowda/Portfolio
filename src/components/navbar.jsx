import React from 'react'
import mag from '../assets/images/mag.png';

const classes = {
    container: 'flex mt-[50px] mx-auto px-4 rounded-[30px] bg-white/1 backdrop-blur-sm h-[60px] w-[90%] justify-between items-center',
    container1: 'flex justify-around items-center',
    item: 'cursor-pointer text-white px-4',
    img: 'h-[60px] w-[170px] cursor-pointer',
}

function Navbar() {
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <img src={mag} className={classes.img}/>
      </div>
      <div className={classes.container1}>
        <div className={classes.item}>About Me</div>
        <div className={classes.item}>Blog</div>
        <div className={classes.item}>Projects</div>
        <div className={classes.item}>Contact</div>
      </div>
    </div>
  )
}

export default Navbar;