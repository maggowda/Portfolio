import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import x from '../assets/images/x.svg';
import Modal from '@mui/material/Modal';
import arrow from '../assets/images/arrow-right.svg';
import { PuffLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
  img3: 'w-[20px] h-[20px] ml-[10px] inline mb-[3px]',
  button2: 'flex flex-row lg:text-[18px] md:text-[18px] text-[12px] sm:text-[14px] text-semibold bg-[#141414] border-solid inline border-[2px] border-zinc-700 hover:border-[#006cff] sm:py-[10px] px-[50px] sm:h-[45px] lg:h-[58px] md:h-[58px] lg:py-[13px] md:py-[13px] py-[10px] h-[43px] rounded-[30px] hover:bg-[#006cff] cursor-pointer',
  name:'text-white lg:text-[18px] md:text-[18px] text-[12px] ml-[15px] sm:text-[14px]',
  button1: 'lg:w-[340px] lg:h-[60px] md:h-[60px] md:w-[420px] md:text-[22px] sm:w-[280px] sm:h-[40px] h-[35px] w-[260px] sm:mt-[-10px] sm:text-[16px] rounded-[30px] bg-[#006cff] border-solid border-[1px] border-zinc-900 text-white lg:text-[22px] text-[16px] px-[15px] lg:mt-[20px] md:mt-[10px] mt-[5px] hover:bg-[#141414] hover:border-[#006cff] cursor-pointer',
  inside: 'w-[145px] h-[30px] text-[9px] lg:w-[240px] lg:h-[50px] md:w-[280px] md:h-[50px] sm:w-[175px] md:text-[18px] sm:h-[35px] sm:text-[13px] rounded-[10px] bg-[#141414] border-solid border-[1px] border-zinc-800 text-white text-[16px] px-[15px] lg:mt-[10px] md:mt-[10px] sm:mt-[10px] mt-[5px] hover:border-[#141414]',
  inside1: 'lg:w-[500px] lg:h-[50px] text-[9px] md:w-[575px] md:h-[50px] rounded-[10px] md:text-[18px] bg-[#141414] w-[310px] sm:w-[380px] sm:text-[13px] sm:h-[35px] border-solid border-[1px] border-zinc-800 text-white lg:text-[18px] text-[10px] h-[32px] px-[15px] lg:mt-[10px] md:mt-[10px] sm:mt-[10px] mt-[5px] hover:border-[#141414]',
  inside2: 'lg:w-[470px] lg:h-[50px] text-[9px] md:w-[550px] md:h-[50px] text-white md:text-[18px] lg:text-[16px] sm:text-[13px] w-[280px] sm:w-[355px] sm:h-[35px] h-[30px] bg-[#141414]',
  button: 'bg-zinc-800 hover:bg-[#006cff] sm:w-[40px] sm:h-[40px] h-[30px] w-[30px] sm:mr-[18px] mr-[20px] lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] rounded-full mt-[-12px] ml-[-40px] lg:mr-[-15px] md:mr-[-15px] cursor-pointer flex justify-center items-center',
  span: 'text-[#006cff] mt-[30px] ml-[-22px] text-[20px] px-[20px]',
  img: 'w-[230px] h-[230px] rounded-[30px] mt-[10px] mx-[190px]',
  img1: 'md:w-[25px] md:h-[25px] lg:w-[25px] lg:h-[25px] sm:w-[20px] sm:h-[20px] h-[15px] w-[15px]',
  para: 'text-white text-left mt-[40px] px-[20px] text-[17px]',
  container1: 'flex flex-row justify-end lg:w-[500px] md:w-[600px] w-[350px] sm:w-[410px]',
  container2: 'flex w-[310px] lg:w-[500px] md:w-[600px] sm:w-[410px] lg:mt-[20px] md:mt-[20px] sm:mt-[20px] mt-[10px] lg:justify-between justify-between sm:justify-around md:justify-around',
  container3: 'flex lg:w-[500px] md:w-[600px] sm:w-[410px] lg:mt-[40px] md:mt-[40px] sm:mt-[40px] mt-[20px] justify-center',
  container: 'flex flex-col w-[350px] h-[425px] sm:w-[410px] md:w-[670px] md:h-[650px] lg:w-[570px] lg:h-[670px] items-center bg-black rounded-[30px] border-solid border-[1px] border-zinc-800',
  item: 'cursor-pointer text-white px-4 pb-[6px] pt-[5px] hover:bg-white/20 hover:backdrop-blur-sm hover:text-white rounded-[10px]',
  spin: 'flex justify-center items-center w-[100%] h-[100%] bg-black bg-opacity-50 fixed top-0 left-0 z-[100]',
};

const Start = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [company, setCompany] = useState('');
  const [project, setProject] = useState('');
  const [budget, setBudget] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.REACT_APP_SERVICE_ID;
    const templateId = import.meta.env.REACT_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.REACT_APP_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      from_designation: designation,
      from_company: company,
      from_project: project,
      from_budget: budget,
      to_name: 'Megharsha A Gowda',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response);
      toast.success('Response submitted successfully.', {
        style: {
          borderRadius: '10px',
          padding: '10px',
          color: '#ffffff',
          background: '#141414',
        },
        duration: 2000,
      });
      setLoading(false);
      setName('');
      setEmail('');
      setDesignation('');
      setCompany('');
      setProject('');
      setBudget('');
    })
    .catch((error) => {
      console.log('FAILED...', error);
      toast.error('Failed to Submit the response.', {
        style: {
          borderRadius: '10px',
          padding: '10px',
          color: '#ffffff',
          background: '#141414',
        },
        duration: 2000,
      });
      setLoading(false);
    });
  };

  return (
    <div>
      <Toaster position='top-center'/>
      <motion.span whileTap={{scale: 0.9}} whileHover={{scale:1.05}} onClick={handleOpen} className={style.button2}>Start a project<span><img src={arrow} className={style.img3}/></span></motion.span>
      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} id='about' className={style.container}> 
            <div className={style.container1}>
              <motion.div whileTap={{scale: 0.9}} whileHover={{rotate:90}} className={style.button} open={open} onClick={handleClose}>
                <img src={x} className={style.img1}></img>
              </motion.div>
            </div>
            <form onSubmit={sendEmail}>
              <div className={style.container2}>
                <div>
                  <label className={style.name}>Name</label><br/>
                  <input type='text' id='input' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' className={style.inside} required/>
                </div>
                <div>
                  <label className={style.name}>Mail</label><br/>
                  <input type='email' id='input' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='konichiwa@hola.com' className={style.inside} required/>
                </div>
              </div>
              <div className={style.container2}>
                <div>
                  <label className={style.name}>Designation</label><br/>
                  <input type='text' id='input' value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder='Director' className={style.inside} required/>
                </div>
                <div>
                  <label className={style.name}>Company</label><br/>
                  <input type='text' id='input' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Company Name' className={style.inside} required/>
                </div>
              </div>
              <div className={style.container2}>
                <div>
                  <label className={style.name}>Project</label><br/>
                  <div className={style.inside1}>
                    <select id='input' value={project} onChange={(e) => setProject(e.target.value)} className={style.inside2}>
                      <option value='Not yet decided'>Not yet decided</option>
                      <option value='Web Development'>Web Development</option>
                      <option value='Web Design'>Web Design</option>
                      <option value='Complete Project'>Complete Project</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={style.container2}>
                <div>
                  <label className={style.name}>Budget</label><br/>
                  <div className={style.inside1}>
                    <select id='input' value={budget} onChange={(e) => setBudget(e.target.value)} className={style.inside2}>
                      <option value='6K+'>6K+</option>
                      <option value='11K+'>11K+</option>
                      <option value='20K+'>20K+</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={style.container3}>
                <motion.div whileTap={{scale: 0.9}} whileHover={{scale:1.05}}>
                  <input type='submit' id='input' placeholder='Submit' className={style.button1} required/>
                </motion.div>
              </div>
              {loading &&
                <div className={style.spin}>
                  <PuffLoader visible={true} size={70} color="white"/>
                </div>
              }
            </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Start;