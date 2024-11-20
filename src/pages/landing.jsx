import React from 'react'
import arrow from '../assets/images/arrow-right.svg';

const classes = {
  container: 'flex flex-col items-center bg-black text-white width-[90%]',
  container1: 'flex flex-row justify-around items-center w-full mt-[-80px]',
  container2: 'flex flex-col',
  container3: 'flex flex-col mt-[200px]',
  h1: 'text-[50px] mt-[180px]',
  h2: 'text-[140px] font-semibold',
  h3: 'text-[23px] mt-[15px] mb-[25px] text-zinc-400',
  h4: 'text-[55px] mt-[70px] mb-[20px] text-center',
  button: 'text-[18px] text-semibold bg-[#141414] border-solid border-[2px] border-zinc-700 hover:border-black px-[50px] py-[10px] rounded-[30px] hover:bg-[#006cff] cursor-pointer',
  img: 'w-[20px] h-[20px] ml-[10px] inline mb-[3px]',
  div0: 'w-[1100px] h-[650px] mt-[95px] bg-zinc-700 rounded-[50px] z-30',
  div1: 'w-[1100px] h-[650px] mt-[50px] bg-zinc-700 rounded-[50px] z-20',
  div2: 'w-[1100px] h-[650px] my-[50px] bg-zinc-700 rounded-[50px] z-10',
  div3: 'w-[510px] h-[300px] rounded-[30px] bg-zinc-700 mb-[40px]' 
}
function Landing() {
  return (
    <div className={classes.container}>
      <div className={classes.h1}><span>こんにちは</span>, I'm</div>{/*add changing hello*/}
      <span className={classes.h2} id='font'>Megharsha</span>
      <div className={classes.h3}>Freelance UX UI Designer and Web Developer.<br/></div>
      <div className={classes.button}>Start a project<img src={arrow} className={classes.img}/></div>{/*add smooth to button*/}
      <div className={classes.div0}></div>
      <div className={classes.div1}></div>
      <div className={classes.div2}></div>
      <div className={classes.h4}>High quality web design <br/>and development</div>
      <div className={classes.container1}>
        <div className={classes.container2}>
          <div className={classes.div3}></div>
          <div className={classes.div3}></div>
        </div>
        <div className={classes.container3}>
          <div className={classes.div3}></div>
          <div className={classes.div3}></div>
        </div>
      </div>
      <div className={classes.button}>View all projects<img src={arrow} className={classes.img}/></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Landing;