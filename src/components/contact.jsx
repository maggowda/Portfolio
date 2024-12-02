import * as React from 'react';
import Box from '@mui/material/Box';
import profile from '../assets/images/profile.svg';
import x from '../assets/images/x.svg';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
  button: 'bg-zinc-800 hover:bg-[#006cff] w-[50px] h-[50px] rounded-full mt-[-12px] ml-[-40px] mr-[-45px] cursor-pointer flex justify-center items-center',
  span: 'text-[#006cff] mt-[30px] ml-[-22px] text-[20px] px-[20px]',
  img: 'w-[230px] h-[230px] rounded-[30px] mt-[10px] mx-[190px]',
  img1: 'w-[25px] h-[25px]',
  para: 'text-white text-left mt-[40px] px-[20px] text-[17px]',
  container1: 'flex flex-row justify-between w-[600px]',
  container: 'flex flex-col w-[730px] h-[590px] items-center bg-[#141414]/70 backdrop-blur-lg rounded-[30px] border-solid border-[1px] border-zinc-800',
  item: 'cursor-pointer text-white px-4 pb-[6px] pt-[5px] hover:bg-white/20 hover:backdrop-blur-sm hover:text-white rounded-[10px]',
};

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen} className={style.item}>Contact</div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}  className={style.container}> 
            <div className={style.container1}>
              <img src={profile} className={style.img}></img>
              <div className={style.button} open={open} onClick={handleClose}>
                <img src={x} className={style.img1}></img>
              </div>
            </div>
            <p className={style.para} id='about'>I’m a passionate UI/UX designer and web developer with expertise in crafting visually compelling and user-friendly digital experiences. Proficient in the MERN stack, I excel at creating seamless interfaces and developing responsive web applications. My goal is to bridge the gap between aesthetics and functionality, ensuring every project leaves a lasting impression. Outside of work, I enjoy playing volleyball and cricket, immersing myself in gaming, and swimming to stay active.
              <div className={style.span} id='about'> Let’s collaborate to bring innovative ideas to life!</div></p>
        </Box>
      </Modal>
    </div>
  );
}

export default Contact;