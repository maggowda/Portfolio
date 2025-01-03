import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import x from '../assets/images/x.svg';
import Modal from '@mui/material/Modal';
import { PuffLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
  name:'text-white text-[18px] ml-[15px] max-sm:text-[14px]',
  button1: 'lg:w-[340px] lg:h-[60px] md:h-[60px] md:w-[440px] md:text-[22px] max-sm:w-[300px] max-sm:h-[45px] max-sm:text-[16px] rounded-[30px] bg-[#006cff] border-solid border-[1px] border-zinc-900 text-white text-[20px] px-[15px] mt-[10px] hover:bg-[#141414] hover:border-[#006cff] cursor-pointer',
  inside: 'lg:w-[240px] lg:h-[50px] md:w-[280px] md:h-[50px] max-sm:w-[185px] md:text-[18px] max-sm:h-[35px] max-sm:text-[13px] rounded-[10px] bg-[#141414] border-solid border-[1px] border-zinc-800 text-white text-[16px] px-[15px] mt-[10px] hover:border-[#141414]',
  inside1: 'lg:w-[500px] lg:h-[50px] md:w-[575px] md:h-[50px] rounded-[10px] md:text-[18px] bg-[#141414] max-sm:w-[400px] max-sm:text-[13px] max-sm:h-[35px] border-solid border-[1px] border-zinc-800 text-white text-[16px] px-[15px] mt-[10px] hover:border-[#141414]',
  inside2: 'lg:w-[470px] lg:h-[50px] md:w-[550px] md:h-[50px] text-white md:text-[18px] lg:text-[16px] max-sm:text-[13px] max-sm:w-[375px] max-sm:h-[35px] bg-[#141414]',
  button: 'bg-zinc-800 hover:bg-[#006cff] max-sm:mr-[10px] w-[50px] h-[50px] rounded-full mt-[-12px] ml-[-40px] mr-[-15px] cursor-pointer flex justify-center items-center',
  span: 'text-[#006cff] mt-[30px] ml-[-22px] text-[20px] px-[20px]',
  img: 'w-[230px] h-[230px] rounded-[30px] mt-[10px] mx-[190px]',
  img1: 'w-[25px] h-[25px]',
  para: 'text-white text-left mt-[40px] px-[20px] text-[17px]',
  container1: 'flex flex-row justify-end lg:w-[500px] md:w-[600px] max-sm:w-[430px]',
  container2: 'flex lg:w-[500px] md:w-[600px] max-sm:w-[430px] mt-[20px] lg:justify-between max-sm:justify-around md:justify-around',
  container3: 'flex lg:w-[500px] md:w-[600px] max-sm:w-[430px] mt-[40px] justify-center',
  container: 'flex flex-col max-sm:w-[450px] md:w-[670px] md:h-[660px] lg:w-[570px] lg:h-[670px] items-center bg-black rounded-[30px] border-solid border-[1px] border-zinc-800',
  item: 'cursor-pointer text-white px-4 pb-[6px] pt-[5px] hover:bg-white/20 hover:backdrop-blur-sm hover:text-white rounded-[10px]',
  spin: 'flex justify-center items-center w-[100%] h-[100%] bg-black bg-opacity-50 fixed top-0 left-0 z-[100]',
};

const Contact = () => {
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

    const serviceId = 'service_9gkknm7';
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
      setLoading(false);
      toast.success('Failed to Submit the response.', {
        style: {
          borderRadius: '10px',
          padding: '10px',
          color: '#ffffff',
          background: '#141414',
        },
        duration: 2000,
      });
    });
  };

  return (
    <div>
      <Toaster position='top-center'/>
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

export default Contact;