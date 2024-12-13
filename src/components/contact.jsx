import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import x from '../assets/images/x.svg';
import Modal from '@mui/material/Modal';
import arrow from '../assets/images/arrow-right.svg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
  name:'text-white text-[18px] ml-[15px]',
  button1: 'w-[340px] h-[60px] rounded-[30px] bg-[#006cff] border-solid border-[1px] border-[#006cff] text-white text-[20px] px-[15px] mt-[10px] hover:bg-[#141414] hover:border-[#006cff] cursor-pointer',
  inside: 'w-[240px] h-[50px] rounded-[10px] bg-[#141414] border-solid border-[1px] border-zinc-800 text-white text-[16px] px-[15px] mt-[10px] hover:border-[#141414]',
  inside1: 'w-[500px] h-[50px] rounded-[10px] bg-[#141414] border-solid border-[1px] border-zinc-800 text-white text-[16px] px-[15px] mt-[10px] hover:border-[#141414]',
  inside2: 'w-[470px] h-[50px] text-white text-[16px] bg-[#141414]',
  button: 'bg-zinc-800 hover:bg-[#006cff] w-[50px] h-[50px] rounded-full mt-[-12px] ml-[-40px] mr-[-15px] cursor-pointer flex justify-center items-center',
  span: 'text-[#006cff] mt-[30px] ml-[-22px] text-[20px] px-[20px]',
  img: 'w-[230px] h-[230px] rounded-[30px] mt-[10px] mx-[190px]',
  img1: 'w-[25px] h-[25px]',
  para: 'text-white text-left mt-[40px] px-[20px] text-[17px]',
  container1: 'flex flex-row justify-end w-[500px]',
  container2: 'flex w-[500px] mt-[20px] justify-between',
  container3: 'flex w-[500px] mt-[40px] justify-center',
  container: 'flex flex-col w-[570px] h-[670px] items-center bg-black rounded-[30px] border-solid border-[1px] border-zinc-800',
  item: 'cursor-pointer text-white px-4 pb-[6px] pt-[5px] hover:bg-white/20 hover:backdrop-blur-sm hover:text-white rounded-[10px]',
};

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [company, setCompany] = useState('');
  const [project, setProject] = useState('');
  const [budget, setBudget] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_l4dwx9c';
    const templateId = 'template_gb0ssw6';
    const publicKey = 'pSroY9RBgJe1DON0w';

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
      alert('Your response has been submitted successfully');
      setName('');
      setEmail('');
      setDesignation('');
      setCompany('');
      setProject('');
      setBudget('');
    })
    .catch((error) => {
      console.log('FAILED...', error);
      alert('Your response has not been submitted');
    });
  };

  return (
    <div>
      <div onClick={handleOpen} className={style.item}>Contact</div>
      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} id='about' className={style.container}> 
            <div className={style.container1}>
              <div className={style.button} open={open} onClick={handleClose}>
                <img src={x} className={style.img1}></img>
              </div>
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
                <div>
                  <input type='submit' id='input' placeholder='Submit' className={style.button1} required/>
                </div>
              </div>
            </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Contact;