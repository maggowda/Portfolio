import React from 'react'
import arrow from '../assets/images/arrow-right.svg';

const classes = {
  container: 'flex flex-col h-screen items-center bg-black text-white width-[90%]',
  h1: 'text-[50px] mt-[180px]',
  h2: 'text-[140px] font-semibold',
  h3: 'text-[23px] mt-[20px] text-zinc-400',
  button: 'text-[18px] text-semibold mt-[30px] bg-[#141414] border-solid border-[2px] border-zinc-700 hover:border-black px-[50px] py-[10px] rounded-[30px] hover:bg-[#006cff] cursor-pointer',
  img: 'w-[20px] h-[20px] ml-[10px] inline mb-[3px]'
}
function Landing() {
  return (
    <div className={classes.container}>
      <div className={classes.h1}><span>こんにちは</span>, I'm</div>{/*add changing hello*/}
      <span className={classes.h2} id='font'>Megharsha</span>
      <div className={classes.h3}>Freelance UX UI Designer and Web Developer.<br/></div>
      <div className={classes.button}>Start a project<img src={arrow} className={classes.img}/></div>{/*add smooth to button*/}
    </div>
  )
}

export default Landing;