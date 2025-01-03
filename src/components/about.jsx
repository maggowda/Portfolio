import * as React from 'react';
import Box from '@mui/material/Box';
import profile from '../assets/images/mag_profile.svg';
import x from '../assets/images/x.svg';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
  button: 'bg-zinc-800 hover:bg-[#006cff] max-sm:mr-[20px] max-sm:w-[40px] max-sm:h-[40px] w-[50px] max-sm:mt-[-9px] h-[50px] md:mr-[-15px] rounded-full mt-[-12px] lg:ml-[-40px] lg:mr-[-45px] cursor-pointer flex justify-center items-center',
  span: 'text-[#006cff] mt-[30px] max-sm:text-[12px] ml-[-22px] lg:text-[20px] md:text-[16px] px-[20px]',
  img: 'lg:w-[280px] lg:h-[280px] md:w-[220px] md:h-[220px] max-sm:w-[180px] max-sm:h-[180px] max-sm:ml-[120px] md:ml-[160px] rounded-[30px] mt-[30px] mx-auto',
  img1: 'w-[25px] max-sm:w-[20px] max-sm:h-[20px] h-[25px]',
  para: 'text-white text-left mt-[40px] max-sm:text-[10px] px-[20px] lg:text-[17px] md:text-[14px]',
  container1: 'flex flex-row justify-between max-sm:w-[400px] lg:w-[600px] md:w-[520px]',
  container: 'flex flex-col lg:w-[730px] max-sm:w-[400px] max-md:w-[600px] max-sm:h-[500px] md:h-[570px] lg:h-[660px] items-center bg-black rounded-[30px] border-solid border-[1px] border-zinc-800',
  item: 'cursor-pointer text-white lg:px-4 md:px-2 max-sm:px-2 pb-[6px] pt-[5px] hover:bg-white/20 hover:backdrop-blur-sm hover:text-white rounded-[10px]',
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
              <div className={style.button} open={open} onClick={handleClose}>
                <img src={x} className={style.img1}></img>
              </div>
            </div>
            <div className={style.para} id='about'>I’m a passionate UI/UX designer and web developer with expertise in crafting visually compelling and user-friendly digital experiences. Proficient in the MERN stack, I excel at creating seamless interfaces and developing responsive web applications. My goal is to bridge the gap between aesthetics and functionality, ensuring every project leaves a lasting impression. Outside of work, I enjoy playing volleyball and cricket, immersing myself in gaming, and swimming to stay active.
              <div className={style.span} id='about'> Let’s collaborate to bring innovative ideas to life!</div></div>
        </Box>
      </Modal>
    </div>
  );
}

export default About;