import React,{useState,useEffect} from 'react';
import { Typewriter } from 'react-simple-typewriter';
import arrow from '../assets/images/arrow-right.svg';
import wallpaper from '../assets/images/wallpaper1.svg';
import Carousel from '../components/carousel';
import { Link } from 'react-router-dom';
import Start from '../components/start';
import { motion } from 'framer-motion';
import Ass from '../assets/images/ass.svg';
import Ex from '../assets/images/ex.svg';
import Tech from '../assets/images/tech.svg';
import Ad from '../assets/images/ad.svg';

const classes = {
  container: 'flex flex-col items-center bg-black text-white w-screen',
  container1: 'flex flex-col justify-around items-center mt-[2vw] gap-12 mb-[15px]', 
  container3: 'flex flex-col mt-[200px]',
  jap: 'text-[#006cff] text-[30px] lg:text-[70px] sm:text-[35px] md:text-[45px]',
  h1: 'lg:text-[60px] mt-[195px] text-[30px] font-medium md:text-[45px] sm:text-[35px]',
  h2: 'lg:text-[140px] text-[60px] font-semibold sm:text-[70px] md:text-[120px]',
  h3: 'lg:text-[23px] text-[14px] mt-[5px] mb-[25px] md:text-[23px] sm:text-[16px] text-zinc-400',
  h4: 'lg:text-[55px] text-[29px] md:text-[50px] mt-[150px] mb-[50px] text-center sm:text-[33px]',
  h5: 'lg:text-[90px] text-[40px] md:text-[75px] mt-[-30px] text-center sm:text-[45px]',
  h6: 'lg:text-[60px] text-[33px] md:text-[60px] mt-[30px] mb-[20px] text-center sm:text-[42px]',
  button: 'flex flex-row lg:text-[18px] md:text-[18px] text-[16px] px-[50px] py-[9px] sm:text-[14px] mt-[50px] text-semibold bg-[#141414] border-solid inline border-[2px] border-zinc-700 hover:border-[#006cff] lg:px-[50px] md:px-[50px] md:py-[13px] lg:py-[13px] sm:py-[9px] rounded-[30px] hover:bg-[#006cff] cursor-pointer',
  button2: 'flex flex-row sm:h-[50px] w-[280px] h-[50px] sm:w-[290px] justify-center sm:text-[16px] items-center md:h-[60px] md:w-[330px] md:text-[18px] lg:h-[70px] lg:w-[350px] lg:text-[20px] md:h-[60px] md:w-[300px] md:text-[16px] my-[50px] text-semibold bg-[#141414] border-solid inline border-[2px] border-zinc-700 hover:border-[#006cff] rounded-[45px] hover:bg-[#006cff] cursor-pointer',
  button1: 'flex justify-center items-center text-[16px] h-[40px] w-[180px] sm:text-[16px] lg:text-[18px] md:text-[18px] md:h-[60px] md:w-[220px] mt-[15px] text-semibold bg-white lg:w-[240px] lg:h-[60px] sm:h-[40px] sm:w-[180px] text-black rounded-[30px] hover:bg-black hover:text-white cursor-pointer',
  img: 'w-[20px] h-[20px] ml-[10px] inline mb-[3px]',
  img1: 'w-[22px] h-[22px] ml-[15px] inline mb-[2px]',
  div0: 'flex sm:w-[410px] w-[370px] sm:h-[280px] flex-col md:h-[560px] md:w-[700px] h-[280px] items-center justify-center lg:w-[1010px] lg:h-[630px] mt-[120px] mb-[50px] rounded-[50px] bg-cover',
  div3: 'lg:w-[1010px] sm:w-[410px] md:w-[700px] sm:h-[220px] md:h-[400px] w-[370px] h-[220px] lg:h-[570px] md:rounded-[50px] sticky lg:top-[110px] md:top-[85px] sm:top-[75px] top-[75px] z-20 bg-cover rounded-[20px] border-[1px] border-black',
  div3_1: 'lg:w-[1010px] sm:w-[410px] lg:h-[570px] md:w-[700px] md:h-[400px] w-[370px] h-[220px] sm:h-[220px] md:rounded-[50px] sticky lg:top-[125px] md:top-[95px] sm:top-[80px] top-[80px] z-30 bg-cover rounded-[20px] border-[1px] border-black',
  div3_2: 'lg:w-[1010px] sm:w-[410px] lg:h-[570px] md:w-[700px] md:h-[400px] w-[370px] h-[220px] md:rounded-[50px] sm:h-[220px] sticky lg:top-[140px] md:top-[105px] sm:top-[90px] top-[90px] z-40 bg-cover rounded-[20px] border-[1px] border-black',
  div3_3: 'lg:w-[1010px] sm:w-[410px] lg:h-[570px] md:w-[700px] md:h-[400px] w-[370px] h-[220px] md:rounded-[50px] sm:h-[220px] sticky lg:top-[110px] md:top-[115px] sm:top-[100px] top-[100px] z-50 bg-cover rounded-[20px] border-[1px] border-black', 
}

const fromLeft = {
  hidden: { x: -200, opacity: 0 },
  show: { x: 0, opacity: 1 ,
    transition: {
      duration: 1,
      delay: 0,
      ease: 'easeInOut',
    }
  }
}

const fromRight = {
  hidden: { x: 200, opacity: 0 },
  show: { x: 0, opacity: 1 ,
    transition: {
      duration: 1,
      delay: 0,
      ease: 'easeInOut',
    }
  }
}

const fromTop = {
    hidden: { y: -50, opacity: 0, scale: 0.7 },
    show: { y: 0, opacity: 1 , scale:1,
      transition: {
        duration: 0.8,
        delay: 0,
        ease: 'easeInOut',
      }
    }
  }

  const fromBottom = {
    hidden: { y: 50, opacity: 0, scale: 0.7 },
    show: { y: 0, opacity: 1 , scale:1,
      transition: {
        duration: 0.8,
        delay: 0,
        ease: 'easeInOut',
      }
    }
  }

function Landing() {
  return (
    <div className={classes.container}>
      <motion.div
        variants={fromTop}
        initial='hidden'
        animate='show'
        className={classes.h1}><span className={classes.jap}><Typewriter
        words={['こんにちは' , 'Hello']}
        loop={0}
        cursor
        cursorStyle='!'
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={2000}
      /></span>, I'm</motion.div>
      <motion.span variants={fromTop} initial='hidden' animate='show' className={classes.h2} id='font'>Megharsha</motion.span>
      <motion.div variants={fromBottom} initial='hidden' animate='show' className={classes.h3}>Freelance UX/UI Designer and Web Developer.<br/></motion.div>
      <motion.span variants={fromBottom} initial='hidden' animate='show'><Start/></motion.span>
      <motion.div variants={fromBottom} initial='hidden' whileInView={'show'} className={classes.h4}>High quality web design <br/>and development</motion.div>
      <div className={classes.container1}>
          <a href='https://aadithyasecurityservice.vercel.app/' target='_blank' className={classes.div3} style={{backgroundImage:`url(${Ass})`}}></a>
          <a href='https://www.anantadecor.com/' target='_blank' className={classes.div3_1} style={{backgroundImage:`url(${Ad})`}}></a>
          <a href='https://www.figma.com/design/Fcoqj3zCyleyG2Mdgzccpi/Techniqed-UI%2FUX?node-id=0-1&p=f&t=jzFEsq5umB5XjcG2-0' target='_blank' className={classes.div3_2} style={{backgroundImage:`url(${Tech})`}}></a>
          <a href='https://github.com/maggowda/HackHorizon-Exalyte' target='_blank' className={classes.div3_3} style={{backgroundImage:`url(${Ex})`}}></a>
      </div>
      <motion.div variants={fromBottom} initial='hidden' whileInView={'show'} whileTap={{scale : 0.9}} whileHover={{scale:1.05}}><Link to='/projects' className={classes.button}>View all projects<span><img src={arrow} className={classes.img}/></span></Link></motion.div>
      <motion.div variants={fromBottom} initial='hidden' whileInView={'show'} className={classes.div0} style={{backgroundImage:`url(${wallpaper})`}}>
        <div className={classes.h5}>Engineering</div>
        <motion.div whileTap={{scale : 0.9}} whileHover={{scale:1.05}}><Link to='/engineer' className={classes.button1}>Know More</Link></motion.div>
      </motion.div>
      <motion.a variants={fromBottom} initial='hidden' whileInView={'show'} whileTap={{scale : 0.9}} whileHover={{scale:1.05}} href='https://drive.google.com/file/d/1cuAOb6cDwMNUXdMxup0KWU8R1L93IK2U/view?usp=sharing' target='_blank' className={classes.button2}>Download Resume<span><img src={arrow} className={classes.img1}/></span></motion.a>
      <motion.div variants={fromBottom} initial='hidden' whileInView={'show'} className={classes.h6}>Areas of expertise</motion.div>
      <motion.div variants={fromBottom} initial='hidden' whileInView={'show'}><Carousel/></motion.div>
    </div>
  )
}

export default Landing;