import React from 'react'
import arrow from '../assets/images/arrow-right.svg';
import wallpaper from '../assets/images/wallpaper1.svg';
import Carousel from '../components/carousel';

const classes = {
  container: 'flex flex-col items-center bg-black text-white w-screen',
  container1: 'flex flex-row justify-around items-center mt-[-80px] gap-12 mb-[15px]',
  container2: 'flex flex-col',
  container3: 'flex flex-col mt-[200px]',
  jap: 'text-[#006cff]',
  h1: 'text-[50px] mt-[195px] font-medium',
  h2: 'text-[140px] font-semibold',
  h3: 'text-[23px] mt-[15px] mb-[25px] text-zinc-400',
  h4: 'text-[55px] mt-[130px] mb-[20px] text-center',
  h5: 'text-[90px] mt-[-30px] text-center',
  h6: 'text-[60px] mt-[30px] mb-[20px] text-center',
  button: 'text-[18px] text-semibold bg-[#141414] border-solid border-[2px] border-zinc-700 hover:border-[#006cff] px-[50px] py-[13px] rounded-[30px] hover:bg-[#006cff] cursor-pointer',
  button1: 'text-[18px] text-semibold bg-white text-black mt-[15px] px-[50px] py-[15px] rounded-[30px] hover:bg-black hover:text-white cursor-pointer',
  img: 'w-[20px] h-[20px] ml-[10px] inline mb-[3px]',
  div0: 'flex flex-col items-center justify-center w-[1120px] h-[630px] mt-[120px] mb-[50px] border-zinc-800 border-solid border-[2px] rounded-[50px] z-30',
  div3: 'w-[510px] h-[300px] rounded-[30px] bg-zinc-700 mb-[40px]' 
}
function Landing() {
  return (
    <div className={classes.container}>
      <div className={classes.h1}><span className={classes.jap}>こんにちは</span>, I'm</div>{/*add changing hello*/}
      <span className={classes.h2} id='font'>Megharsha</span>
      <div className={classes.h3}>Freelance UX UI Designer and Web Developer.<br/></div>
      <div className={classes.button}>Start a project<img src={arrow} className={classes.img}/></div>{/*add smooth to button*/}
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
      <div className={classes.div0} style={{backgroundImage:`url(${wallpaper})`}}>
        <div className={classes.h5}>Engineering</div>
        <div className={classes.button1}>Know More</div>
      </div>
      <div className={classes.h6}>Areas of expertise</div>
      <Carousel/>
    </div>
  )
}

export default Landing;