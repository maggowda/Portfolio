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
  jap: 'text-[#006cff] text-[30px] lg:text-[8.5vh] sm:text-[35px] md:text-[45px]',
  h1: 'lg:text-[60px] mt-[195px] text-[30px] font-medium md:text-[45px] sm:text-[35px]',
  h2: 'lg:text-[140px] text-[60px] font-semibold sm:text-[70px] md:text-[120px]',
  h3: 'lg:text-[23px] text-[14px] mt-[5px] mb-[25px] md:text-[23px] sm:text-[16px] text-zinc-400',
  h4: 'lg:text-[55px] text-[29px] md:text-[50px] mt-[150px] mb-[50px] text-center sm:text-[33px]',
  h5: 'lg:text-[90px] text-[40px] md:text-[75px] mt-[-30px] text-center sm:text-[45px]',
  h6: 'lg:text-[60px] text-[33px] md:text-[60px] mt-[30px] mb-[20px] text-center sm:text-[42px]',
  button: 'flex flex-row lg:text-[18px] md:text-[18px] text-[16px] px-[50px] py-[9px] sm:text-[14px] mt-[50px] text-semibold bg-[#141414] border-solid inline border-[2px] border-zinc-700 hover:border-[#006cff] lg:px-[50px] md:px-[50px] md:py-[13px] lg:py-[13px] sm:py-[9px] rounded-[30px] hover:bg-[#006cff] cursor-pointer',
  button2: 'flex flex-row sm:h-[50px] w-[280px] h-[50px] sm:w-[290px] justify-center sm:text-[16px] items-center md:h-[60px] md:w-[330px] md:text-[18px] lg:h-[70px] lg:w-[350px] lg:text-[20px] md:h-[60px] md:w-[300px] md:text-[16px] my-[50px] text-semibold bg-[#141414] border-solid inline border-[2px] border-zinc-700 hover:border-[#006cff] rounded-[45px] hover:bg-[#006cff] cursor-pointer',
  button1: 'flex justify-center items-center text-[16px] h-[40px] w-[180px] sm:text-[16px] lg:text-[18px] md:text-[18px] md:h-[60px] md:w-[220px] mt-[15px] text-semibold bg-white lg:w-[240px] lg:h-[60px] sm:h-[40px] sm:w-[180px] text-black rounded-[30px] hover:bg-black hover:text-white cursor-pointer',
  img: 'w-[20px] h-[20px] ml-[10px] inline mb-[3px]',
  img1: 'w-[22px] h-[22px] ml-[15px] inline mb-[2px]',
  div0: 'flex sm:w-[410px] w-[350px] sm:h-[580px] flex-col md:h-[760px] md:w-[700px] h-[580px] items-center justify-center lg:w-[1120px] lg:h-[630px] mt-[120px] mb-[50px] border-zinc-800 border-solid border-[2px] rounded-[50px] z-30',
  div3: 'lg:w-[1120px] sm:w-[410px] md:w-[700px] max-sm:h-[580px] md:h-[760px] w-[350px] h-[580px] lg:h-[630px] rounded-[50px] bg-zinc-700 sticky lg:top-[110px] md:top-[85px] max-sm:top-[70px] z-20 border-solid border-[2px] border-white',
  div3_1: 'lg:w-[1120px] sm:w-[410px] lg:h-[630px] md:w-[700px] md:h-[760px] w-[350px] h-[580px] sm:h-[580px] rounded-[50px] bg-zinc-700 sticky lg:top-[125px] md:top-[95px] max-sm:top-[80px] z-30 border-solid border-[2px] border-white',
  div3_2: 'lg:w-[1120px] sm:w-[410px] lg:h-[630px] md:w-[700px] md:h-[760px] w-[350px] h-[580px] rounded-[50px] sm:h-[580px] bg-zinc-700 sticky lg:top-[140px] md:top-[105px] max-sm:top-[90px] z-40 border-solid border-[2px] border-white',
  div3_3: 'lg:w-[1120px] sm:w-[410px] lg:h-[630px] md:w-[700px] md:h-[760px] w-[350px] h-[580px] rounded-[50px] sm:h-[580px] bg-zinc-700 sticky lg:top-[110px] md:top-[115px] max-sm:top-[100px] z-50 border-solid border-[2px] border-white', 
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