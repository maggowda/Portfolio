import React,{useEffect,useState} from 'react';
import arrow from '../assets/images/arrow-right.svg';
import { motion } from 'framer-motion';

const certi=[
  {
    name:'PCB Design and Fabrication',
    institute:'Indian Tech-Keys',
    date:'2023',
  },
  {
    name:'Ethical Hacking and Cyber Security',
    institute:'Infotech Solutions',
    date:'2023',
  },
  {
    name:'Writing, Running and Fixing Code in C',
    institute:'Duke University',
    date:'2024',
  },
  {
    name:'HTML, CSS and JavaScript for Web Developers',
    institute:'Johns Hopkins University',
    date:'2024',
  },
  {
    name:'Front-End Development',
    institute:'Meta',
    date:'2024',
  },
  {
    name:'Programming with Javascript',
    institute:'Meta',
    date:'2024',
  },
  {
    name:'Version Control',
    institute:'Meta',
    date:'2024',
  },
  {
    name:'HTML and CSS in depth',
    institute:'Meta',
    date:'2024',
  },
  {
    name:'Hack Horizon Hackathon',
    institute:'Reva University',
    date:'2024',
  },
]

const edu=[
  {
    name:'B.Tech in Electronics and Communication Engineering',
    institute:'Reva University',
    date:'2022-2026',
  },
  {
    name:'Pre-University Course (PUC)',
    institute:'Narayana PU College',
    date:'2020-2022',
  },
  {
    name:'Secondary School Leaving Certificate (SSLC)',
    institute:'St. Claret School',
    date:'2008-2020',
  },
]

{/*const intern=[
  {
    job:'job name',
    date:'dates',
    desc:'description',
  }
]*/}

const lang=[
  {
    name:'English,',
  },
  {
    name:'Kannada,',
  },
  {
    name:'German,',
  },
  {
    name:'Hindi,',
  },
  {
    name:'Telugu.',
  },
]

const skill=[
  {
    name:'Programming Languages',
    skills:'Javascript, C/C++, Python, HTML, CSS, SQL',
  },
  {
    name:'Full-Stack Frameworks',
    skills:'React.Js, Node.Js, Express.Js, Django, Next.Js, Tailwind.CSS',
  },
  {
    name:'Tools',
    skills:'Git, GitHub, Figma, Canva, Excel, KiCAD, Arduino IDE, VS Code, ChatGPT, Design Spark',
  },
  {
    name:'Database',
    skills:'MySQL, MongoDB',
  }
]

const classes={
    container: 'flex flex-col items-center mt-[80px] sm:mt-[80px] md:mt-[110px] lg:mt-[80px] w-full mb-[30px]',
    container0: 'flex flex-row flex-wrap items-center justify-center',
    container1:'bg-[#141414] w-[350px] sm:w-[350px] lg:w-[690px] md:w-[555px] rounded-[15px] sm:rounded-[15px] md:rounded-[30px] lg:rounded-[30px] pb-[15px] sm:pb-[15px] md:pb-[25px] lg:pb-[25px] my-[10px] sm:my-[10px] md:my-[30px] lg:my-[30px] mt-[10px] sm:mt-[10px] mr-[0px] sm:mr-[0px] lg:mr-[60px] md:mr-[20px] ',
    container1_1:'bg-[#141414] w-[230px] sm:w-[230px] lg:w-[655px] md:w-[460px] rounded-[15px] sm:rounded-[15px] md:rounded-[30px] lg:rounded-[30px] pb-[15px] sm:pb-[15px] md:pb-[25px] lg:pb-[25px] my-[10px] sm:my-[10px] md:my-[30px] lg:my-[30px] mr-[10px] mr-[10px] lg:mr-[60px] md:mr-[20px] sm:h-[119px] h-[119px] md:h-[149px] lg:h-[199px]',
    container2:'bg-[#141414] w-[350px] sm:w-[350px] lg:w-[1010px] md:w-[730px] rounded-[15px] sm:rounded-[15px] md:rounded-[30px] lg:rounded-[30px] pb-[25px] my-[10px] sm:my-[10px] md:my-[30px] lg:my-[30px]',
    container3:'bg-[#141414] w-[165px] sm:w-[165px] lg:w-[260px] md:w-[150px] rounded-[15px] sm:rounded-[15px] md:rounded-[30px] lg:rounded-[30px] py-[28px] lg:py-[28px] md:h-[130px] h-[133px] sm:h-[133px] lg:h-[176px] my-[10px] sm:my-[10px] lg:my-[30px] md:my-[30px]',
    container4:'flex lg:flex-col md:flex-col sm:flex-row flex-row justify-between items-center w-[350px] sm:w-[350px] md:w-[150px] lg:w-[260px]',
    container5:'bg-[#141414] w-[110px] sm:w-[110px] lg:w-[300px] md:w-[245px] rounded-[15px] sm:rounded-[15px] md:rounded-[30px] lg:rounded-[30px] lg:py-[40px] md:py-[25px] sm:py-[30px] py-[30px] lg:h-[199px] md:h-[149px] sm:h-[119px] h-[119px] my-[10px] sm:my-[10px] md:my-[30px] lg:my-[30px]',
    head: 'font-serif font-semibold text-[26px] sm:text-[26px] my-[25px] lg:text-[60px] lg:my-[25px] md:text-[45px] md:my-[15px] ml-[20px] sm:ml-[20px] lg:ml-[50px] md:ml-[30px]',
    head_1: 'font-serif font-semibold text-[26px] sm:text-[26px] mt-[25px] mb-[10px] sm:mt-[25px] sm:mb-[10px] lg:text-[60px] lg:my-[25px] md:text-[45px] md:my-[15px] ml-[20px] sm:ml-[20px] lg:ml-[50px] md:ml-[30px]',
    head1: 'font-serif font-semibold text-[24px] sm:text-[24px] lg:text-[40px] md:text-[25px] text-center',
    head2: 'font-serif font-semibold text-[8px] sm:text-[8px] lg:text-[22px] md:text-[18px] text-center mt-[10px] mx-auto',
    head3: 'font-serif font-semibold text-[24px] sm:text-[24px] lg:text-[35px] md:text-[20px] text-center mt-[0px] lg:mt-[5px] md:mt-[0px] mx-auto',
    para: 'text-[12px] sm:text-[12px] mb-[15px] lg:text-[21px] lg:mb-[15px] md:text-[18px] md:mb-[10px] lg:ml-[70px] ml-[20px] sm:ml-[20px] md:ml-[45px] text-zinc-400',
    para1: 'text-[10px] sm:text-[10px] lg:text-[23px] lg:mb-[15px] md:text-[18px] md:mb-[10px] lg:ml-[5px] sm:ml-[0px] ml-[0px] md:ml-[3px] mb-[15px] text-zinc-400',
    para2: 'text-[24px] sm:text-[24px] sm:mt-[5px] mt-[5px] lg:mt-[0px] md:mt-[0px] lg:text-[43px] md:text-[25px] font-semibold text-center text-[#006cff]',
    para3: 'text-[8px] sm:text-[8px] lg:text-[22px] md:text-[20px] font-semibold text-center text-[#006cff] mt-[15px]',
    para4: 'text-[24px] sm:text-[24px] lg:text-[35px] md:text-[20px] font-semibold text-center text-[#006cff] lg:mt-[15px] md:mt-[15px] sm:mt-[5px] mt-[5px]',
    pad: 'ml-[20px] sm:ml-[20px] md:ml-[60px] lg:ml-[60px]',
    button: 'flex flex-row sm:h-[50px] w-[280px] h-[50px] sm:w-[290px] justify-center sm:text-[16px] items-center md:h-[60px] md:w-[330px] md:text-[18px] lg:h-[70px] lg:w-[350px] lg:text-[20px] md:h-[60px] md:w-[300px] md:text-[16px] my-[50px] text-semibold bg-[#141414] border-solid inline border-[2px] border-zinc-700 hover:border-[#006cff] rounded-[45px] hover:bg-[#006cff] cursor-pointer',
    img: 'w-[22px] h-[22px] ml-[15px] inline mb-[2px]',
}

const fromBottom = {
  hidden: { y: 50, opacity: 0, scale: 0.5 },
  show: { y: 0, opacity: 1 , scale:1,
    transition: {
      duration: 0.8,
      delay: 0,
      ease: 'easeInOut',
    }
  }
}

const Engineer = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 9; 
    if (start === end) return;

    let totalDuration = 500; 
    let incrementTime = (totalDuration / end) * 2; 

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, []);

  return (
    <div className={classes.container}>
      {/* <div>
        <h1>Experience</h1>
        {intern.map((intern,index) => (
          <div key={index}>
            <div>{intern.job} - ({intern.date})</div>
            <div>{intern.desc}</div>
          </div>
        ))}
      </div> */}
      <div className={classes.container0}>
        <motion.div variants={fromBottom} initial='hidden' whileInView={'show'} className={classes.container1}>
          <h1 className={classes.head}>Education:</h1>
          {edu.map((edu,index) => (
            <div key={index} className={classes.para}>
              <div>{edu.name}</div>
              <div>{edu.institute} - ({edu.date})</div>
            </div>
          ))}
        </motion.div>
        <motion.div variants={fromBottom} initial='hidden' whileInView={'show'} className={classes.container4}>
          <div className={classes.container3}>
            <h1 className={classes.head1}>Projects</h1>
            <div className={classes.para2}>{count}</div>
          </div>
          <div className={classes.container3}>
            <h1 className={classes.head3}>Full-Stack</h1>
            <div className={classes.para4}>Developer</div>
          </div>
        </motion.div>
      </div>
      <motion.div variants={fromBottom} initial='hidden' whileInView={'show'} className={classes.container2}>
        <h1 className={classes.head}>Skills:</h1>
        {skill.map((skill,index) => (
          <div key={index} className={classes.para}>
            <div>{skill.name} :</div>
            <div>{skill.skills}</div>
          </div>
        ))}
      </motion.div>
      <motion.div variants={fromBottom} initial='hidden' whileInView={'show'} className={classes.container2}>
        <h1 className={classes.head}>Certifications:</h1>
        {certi.map((certif,index) => (
          <div key={index} className={classes.para}>
            <div>{certif.name} : <span>{certif.institute} - ({certif.date})</span></div>
          </div>
        ))}
      </motion.div>
      <motion.div variants={fromBottom} initial='hidden' whileInView={'show'} className={classes.container0}>
        <div className={classes.container1_1}>
          <h1 className={classes.head_1}>Languages:</h1>
          <div className={classes.pad}>
            {lang.map((lang,index) => (
              <span key={index} className={classes.para1}>
                <span>{lang.name} </span>
              </span>
            ))}
          </div>
        </div>
        <div className={classes.container5}>
          <h1 className={classes.head2}>"The more you learn,<br /> the more you earn." <br/>- <span className={classes.para3}>Warren Buffett</span></h1>
        </div>
      </motion.div>
      <motion.a variants={fromBottom} initial='hidden' whileInView={'show'} whileTap={{scale: 0.9}} whileHover={{scale:1.05}} href='https://drive.google.com/file/d/1Uk_Y8aha1p1hzs2O3HvDf0RJrDUMa3mV/view?usp=sharing' target='_blank' className={classes.button}>Download Resume<span><img src={arrow} className={classes.img}/></span></motion.a>
    </div>
  )
}

export default Engineer;