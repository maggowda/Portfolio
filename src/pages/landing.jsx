import React,{useState,useEffect} from 'react'
import Typical from 'react-typical';
import arrow from '../assets/images/arrow-right.svg';
import wallpaper from '../assets/images/wallpaper1.svg';
import Carousel from '../components/carousel';
import { Link } from 'react-router-dom';
import Start from '../components/start';

const classes = {
  container: 'flex flex-col items-center bg-black text-white w-screen',
  container1: 'flex flex-col justify-around items-center mt-[2vw] gap-12 mb-[15px]', 
  container3: 'flex flex-col mt-[200px]',
  jap: 'text-[#006cff] text-[8.5vh]',
  h1: 'text-[50px] mt-[195px] font-medium',
  h2: 'text-[140px] font-semibold',
  h3: 'text-[23px] mt-[5px] mb-[25px] text-zinc-400',
  h4: 'text-[55px] mt-[150px] mb-[50px] text-center',
  h5: 'text-[90px] mt-[-30px] text-center',
  h6: 'text-[60px] mt-[30px] mb-[20px] text-center',
  button: 'flex flex-row text-[18px] mt-[50px] text-semibold bg-[#141414] border-solid inline border-[2px] border-zinc-700 hover:border-[#006cff] px-[50px] py-[13px] rounded-[30px] hover:bg-[#006cff] cursor-pointer',
  button2: 'flex flex-row justify-center items-center h-[70px] w-[350px] text-[20px] my-[50px] text-semibold bg-[#141414] border-solid inline border-[2px] border-zinc-700 hover:border-[#006cff] rounded-[45px] hover:bg-[#006cff] cursor-pointer',
  button1: 'flex justify-center items-center text-[18px] mt-[15px] text-semibold bg-white w-[240px] h-[60px] text-black rounded-[30px] hover:bg-black hover:text-white cursor-pointer',
  img: 'w-[20px] h-[20px] ml-[10px] inline mb-[3px]',
  img1: 'w-[22px] h-[22px] ml-[15px] inline mb-[2px]',
  div0: 'flex flex-col items-center justify-center w-[1120px] h-[630px] mt-[120px] mb-[50px] border-zinc-800 border-solid border-[2px] rounded-[50px] z-30',
  div3: 'w-[1120px] h-[630px] rounded-[50px] bg-zinc-700 sticky top-[110px] z-20 border-solid border-[2px] border-white',
  div3_1: 'w-[1120px] h-[630px] rounded-[50px] bg-zinc-700 sticky top-[125px] z-30 border-solid border-[2px] border-white',
  div3_2: 'w-[1120px] h-[630px] rounded-[50px] bg-zinc-700 sticky top-[140px] z-40 border-solid border-[2px] border-white',
  div3_3: 'w-[1120px] h-[630px] rounded-[50px] bg-zinc-700 sticky top-[110px] z-50 border-solid border-[2px] border-white',
  div4: 'flex flex-row gap-8 mt-[20px]', 
}
function Landing() {

  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setToggle((prevToggle) => !prevToggle);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.h1}><span className={classes.jap}><Typical steps={[toggle ? 'こんにちは' : 'Hello', 5000]} loop={1} wrapper="span"/></span>, I'm</div>
      <span className={classes.h2} id='font'>Megharsha</span>
      <div className={classes.h3}>Freelance UX UI Designer and Web Developer.<br/></div>
      <span><Start/></span>
      <div className={classes.h4}>High quality web design <br/>and development</div>
      <div className={classes.container1}>
          <div className={classes.div3}></div>
          <div className={classes.div3_1}></div>
          <div className={classes.div3_2}></div>
          <div className={classes.div3_3}></div>
      </div>
      <Link to='/projects' className={classes.button}>View all projects<span><img src={arrow} className={classes.img}/></span></Link>
      <div className={classes.div0} style={{backgroundImage:`url(${wallpaper})`}}>
        <div className={classes.h5}>Engineering</div>
        <Link to='/engineer' className={classes.button1}>Know More</Link>
      </div>
      <a href='' target='_blank' className={classes.button2}>Download Resume<span><img src={arrow} className={classes.img1}/></span></a>
      <div className={classes.h6}>Areas of expertise</div>
      <Carousel/>
    </div>
  )
}

export default Landing;