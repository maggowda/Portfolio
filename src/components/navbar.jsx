import React from 'react'
import mag from '../assets/images/mag.svg';

const classes = {
    container: 'font-mono fixed flex mt-[20px] mx-auto px-4 rounded-[30px] bg-white/3 backdrop-blur-md h-[60px] w-[90%] justify-between items-center z-[1000]',
    container1: 'flex justify-around items-center',
    item: 'cursor-pointer text-white px-4 pb-[6px] pt-[5px] hover:bg-white/20 hover:backdrop-blur-sm hover:text-white rounded-[10px]',
    img: 'h-[60px] w-[150px] cursor-pointer mix-blend-multiply',
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