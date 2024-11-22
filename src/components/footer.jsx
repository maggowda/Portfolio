import React from 'react'
import mag from '../assets/images/mag.svg';
import instagram from '../assets/images/instagram.svg';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import mail from '../assets/images/mail.svg';
import location from '../assets/images/gps.svg';

const classes = {
    container: 'flex flex-row justify-between bg-neutral-900 text-white px-[45px] pt-[30px] pb-[45px] mb-[50px] rounded-[20px] mx-[110px]',
    img: 'w-[150px] h-[90px] ml-[-25px] mb-[-20px] mt-[-10px]',
    img2: 'w-[23px] h-[23px] inline',
    img3: 'w-[22px] h-[21px] inline',
    img4: 'w-[28px] h-[28px] inline',
    container1: 'flex flex-row',
    container2: 'flex flex-col mr-[60px]',
    container3: 'flex flex-col mr-[10px]',
    anc: 'flex flex-row justify-between text-[15px] py-[18px] px-[15px]  ml-[10px] border-zinc-700 border-solid border-t-2 hover:bg-white/10 w-[250px] h-[60px]',
    anc2: 'flex flex-row justify-between text-[15px] py-[18px] px-[15px] ml-[10px] border-zinc-700 border-solid border-y-2 hover:bg-white/10 w-[250px] h-[60px]',
    h1: 'text-lg p-[10px] font-bold text-zinc-400', 
    copy: 'text-sm'
}
function Footer() {
  return (
    <div className={classes.container}>
        <div>
            <img src={mag} className={classes.img}/>
            <div className={classes.copy}>&#169; Megharsha A Gowda<br/>All rights reserved </div>
        </div>
        <div className={classes.container1}>
            <div className={classes.container2}>
                <h1 className={classes.h1}>Social Networking</h1>
                <a href='' className={classes.anc}>Instagram<img src={instagram} className={classes.img2}/></a>
                <a href='' className={classes.anc}>Linkedin<img src={linkedin} className={classes.img2}/></a>
                <a href='' className={classes.anc2}>Github<img src={github} className={classes.img3}/></a>
            </div>
            <div className={classes.container3}>
                <h1 className={classes.h1}>Contact Me</h1>
                <a href='' className={classes.anc}>Whatsapp<img src={whatsapp} className={classes.img3}/></a>
                <a href='' className={classes.anc}>Email<img src={mail} className={classes.img4}/></a>
                <a href='' className={classes.anc2}>Location<img src={location} className={classes.img4}/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer;