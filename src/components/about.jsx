import * as React from 'react';
import Box from '@mui/material/Box';
import profile from '../assets/images/mag_profile.svg';
import x from '../assets/images/x.svg';
import Modal from '@mui/material/Modal';
import { motion } from 'framer-motion';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
  button: 'bg-zinc-800 hover:bg-[#006cff] sm:mr-[20px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] md:h-[50px] md:w-[50px] h-[30px] w-[30px] mr-[17px] sm:mt-[-9px]  md:mr-[-15px] rounded-full mt-[-12px] lg:ml-[-40px] lg:mr-[-45px] cursor-pointer flex justify-center items-center',
  span: 'text-[#006cff] mt-[30px] text-[11px] sm:text-[12px] ml-[-22px] lg:text-[20px] md:text-[16px] px-[20px]',
  img: 'lg:w-[280px] lg:h-[280px] md:w-[220px] md:h-[220px] sm:w-[180px] sm:h-[180px] w-[160px] h-[160px] sm:ml-[120px] md:ml-[160px] lg:ml-[160px] ml-[90px] rounded-[30px] mt-[30px] mx-auto',
  img1: 'md:w-[25px] md:h-[25px] lg:w-[25px] lg:h-[25px] w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] ',
  para: 'text-white text-left mt-[40px] text-[9px] sm:text-[10px] lg:px-[20px] md:px-[20px] sm:px-[15px] lg:text-[17px] md:text-[14px]',
  container1: 'flex flex-row justify-between w-[350px] sm:w-[400px] lg:w-[600px] md:w-[520px]',
  container: 'flex flex-col  lg:w-[730px] w-[350px] sm:w-[400px] md:w-[600px] sm:h-[500px] md:h-[570px] lg:h-[660px] items-center bg-black rounded-[30px] border-solid border-[1px] border-zinc-800',
  item: 'cursor-pointer text-white lg:px-4 md:px-2 sm:px-2 px-2 pb-[6px] pt-[5px] hover:bg-white/20 hover:backdrop-blur-sm hover:text-white rounded-[10px]',
};

const About = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen} className={style.item}>About Me</div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}  className={style.container}> 
            <div className={style.container1}>
              <img src={profile} className={style.img}></img>
              <motion.div whileTap={{scale: 0.9}} whileHover={{rotate:90}} className={style.button} open={open} onClick={handleClose}>
                <img src={x} className={style.img1}></img>
              </motion.div>
            </div>
            <div className={style.para} id='about'>I’m a passionate UI/UX designer and web developer with expertise in crafting visually compelling and user-friendly digital experiences. Proficient in the MERN stack, I excel at creating seamless interfaces and developing responsive web applications. My goal is to bridge the gap between aesthetics and functionality, ensuring every project leaves a lasting impression. Outside of work, I enjoy playing volleyball and cricket, immersing myself in gaming, and swimming to stay active.
              <div className={style.span} id='about'> Let’s collaborate to bring innovative ideas to life!</div></div>
        </Box>
      </Modal>
    </div>
  );
}

export default About;