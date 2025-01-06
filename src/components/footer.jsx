import React from 'react'
import mag from '../assets/images/mag.svg';
import instagram from '../assets/images/instagram.svg';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import mail from '../assets/images/mail.svg';
import location from '../assets/images/gps.svg';
import { motion } from 'framer-motion';

const classes = {
    container0: 'flex flex w-full justify-center items-center m-auto h-full',
    container: 'flex flex-row lg:justify-between lg:w-[1010px] flex-wrap w-[350px] sm:w-[360px] sm:gap-2 sm:flex-wrap md:w-[680px] md:gap-10 md:flex-wrap bg-[#141414] text-white px-[45px] pt-[30px] pb-[45px] mb-[50px] rounded-[20px]',
    img: 'w-[150px] h-[90px] max-sm:w-[90px] max-sm:h-[60px] max-sm:ml-[-15px] ml-[-25px] mb-[-20px] mt-[-10px]',
    img2: 'w-[23px] max-sm:h-[18px] max-sm:w-[18px] h-[23px] inline',
    img3: 'w-[22px] max-sm:h-[18px] max-sm:w-[18px] h-[21px] inline',
    img4: 'w-[28px] max-sm:h-[24px] max-sm:w-[24px] h-[28px] inline',
    container4: 'lg:mr-[100px] md:ml-[15px] max-sm:ml-[10px]',
    container1: 'flex flex-row max-sm:flex-wrap max-sm:gap-4',
    container2: 'flex flex-col lg:mr-[60px] md:mr-[60px]',
    container3: 'flex flex-col lg:mr-[10px] md:mr-[10px]',
    anc: 'flex flex-row justify-between text-[15px] max-sm:text-[12px] max-sm:py-[12px] py-[18px] px-[15px]  ml-[10px] border-zinc-700 border-solid border-t-2 hover:bg-white/10 w-[250px] h-[60px] max-sm:h-[45px]',
    anc2: 'flex flex-row justify-between text-[15px] py-[18px] max-sm:text-[12px] max-sm:py-[12px] px-[15px] ml-[10px] border-zinc-700 border-solid border-y-2 hover:bg-white/10 w-[250px] h-[60px] max-sm:h-[45px]',
    h1: 'text-lg p-[10px] font-bold text-zinc-400 max-sm:text-[14px]', 
    copy: 'text-sm max-sm:text-[12px]',
}

const fromBottom = {
    hidden: { y: 50, opacity: 0, scale: 0.7 },
    show: { y: 0, opacity: 1 , scale:1,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: 'easeInOut',
      }
    }
  }

function Footer() {
  return (
    <motion.div variants={fromBottom} initial='hidden' whileInView={'show'} className={classes.container0}>
        <div className={classes.container}>
            <div className={classes.container4}>
                <img src={mag} className={classes.img}/>
                <div className={classes.copy}>&#169; Megharsha A Gowda<br/>All rights reserved </div>
            </div>
            <div className={classes.container1}>
                <div className={classes.container2}>
                    <h1 className={classes.h1}>Social Networking</h1>
                    <motion.a whileTap={{scale:0.9}} href='https://www.instagram.com/mag_gowda/' target='_blank' className={classes.anc}>Instagram<img src={instagram} className={classes.img2}/></motion.a>
                    <motion.a whileTap={{scale:0.9}} href='https://www.linkedin.com/in/megharsha-a-gowda/' target='_blank' className={classes.anc}>Linkedin<img src={linkedin} className={classes.img2}/></motion.a>
                    <motion.a whileTap={{scale:0.9}} href='https://github.com/maggowda' target='_blank' className={classes.anc2}>Github<img src={github} className={classes.img3}/></motion.a>
                </div>
                <div className={classes.container3}>
                    <h1 className={classes.h1}>Contact Me</h1>
                    <motion.a whileTap={{scale:0.9}} href="https://wa.me/9591873115" target='_blank' className={classes.anc}>Whatsapp<img src={whatsapp} className={classes.img3}/></motion.a>
                    <motion.a whileTap={{scale:0.9}} href='mailto:megharsha.gowda.work@gmail.com' target='_blank' className={classes.anc}>Email<img src={mail} className={classes.img4}/></motion.a>
                    <motion.a whileTap={{scale:0.9}} href='https://www.google.com/maps/place/185,+Kempegowda+Garden,+Abbigere,+Bengaluru,+Karnataka+560013/@13.0813792,77.5248099,21z/data=!4m6!3m5!1s0x3bae22e6618522a5:0x43c687ae737bb4f!8m2!3d13.0813964!4d77.5248363!16s%2Fg%2F11wb1lyst5?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D' target='_blank' className={classes.anc2}>Location<img src={location} className={classes.img4}/></motion.a>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Footer;