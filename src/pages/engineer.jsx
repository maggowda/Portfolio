import React,{useEffect,useState} from 'react';
import arrow from '../assets/images/arrow-right.svg';

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
    container: 'flex flex-col items-center mt-[110px] w-full mb-[30px]',
    container0: 'flex flex-row',
    container1:'bg-[#141414] w-[760px] lg:w-[760px] md:w-[555px] rounded-[30px] pb-[25px] my-[30px] mr-[60px] lg:mr-[60px] md:mr-[20px]',
    container1_1:'bg-[#141414] w-[760px] lg:w-[760px] md:w-[460px] rounded-[30px] pb-[25px] my-[30px] mr-[60px] lg:mr-[60px] md:mr-[20px]',
    container2:'bg-[#141414] w-[1120px] lg:w-[1010px] md:w-[730px] rounded-[30px] pb-[25px] my-[30px]',
    container3:'bg-[#141414] w-[300px] lg:w-[300px] md:w-[150px] rounded-[30px] py-[28px] lg:py-[28px] md:h-[130px] lg:h-[186px] my-[30px] lg:my-[30px] md:my-[30px]',
    container4:'flex flex-col',
    container5:'bg-[#141414] w-[300px] lg:w-[300px] md:w-[245px] rounded-[30px] lg:py-[40px] md:py-[25px] py-[20px] lg:h-[199px] md:h-[149px] h-[199px] mt-[30px]',
    head: 'font-serif font-semibold text-[60px] my-[25px] lg:text-[60px] lg:my-[25px] md:text-[45px] md:my-[15px] ml-[50px] lg:ml-[50px] md:ml-[30px]',
    head1: 'font-serif font-semibold text-[40px] lg:text-[40px] md:text-[25px] text-center',
    head2: 'font-serif font-semibold text-[22px] lg:text-[22px] md:text-[18px] text-center mt-[10px] mx-auto',
    head3: 'font-serif font-semibold text-[35px] lg:text-[35px] md:text-[20px] text-center mt-[10px] lg:mt-[10px] md:mt-[0px] mx-auto',
    para: 'text-[23px] mb-[15px] lg:text-[23px] lg:mb-[15px] md:text-[18px] md:mb-[10px] lg:ml-[70px] ml-[70px] md:ml-[45px] text-zinc-400',
    para1: 'text-[23px] lg:text-[23px] lg:mb-[15px] md:text-[18px] md:mb-[10px] lg:ml-[70px] ml-[70px] md:ml-[3px] mb-[15px] ml-[10px] text-zinc-400',
    para2: 'text-[43px] lg:text-[43px] md:text-[25px] font-semibold text-center text-[#006cff]',
    para3: 'text-[22px] lg:text-[22px] md:text-[20px] font-semibold text-center text-[#006cff] mt-[15px]',
    para4: 'text-[35px] lg:text-[35px] md:text-[20px] font-semibold text-center text-[#006cff] mt-[15px]',
    pad: 'ml-[60px]',
    button: 'flex flex-row justify-center items-center h-[70px] w-[350px] text-[20px] my-[50px] text-semibold bg-[#141414] border-solid inline border-[2px] border-zinc-700 hover:border-[#006cff] rounded-[45px] hover:bg-[#006cff] cursor-pointer',
    img: 'w-[22px] h-[22px] ml-[15px] inline mb-[2px]',
}

const Engineer = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 8; 
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
        <div className={classes.container1}>
          <h1 className={classes.head}>Education:</h1>
          {edu.map((edu,index) => (
            <div key={index} className={classes.para}>
              <div>{edu.name}</div>
              <div>{edu.institute} - ({edu.date})</div>
            </div>
          ))}
        </div>
        <div className={classes.container4}>
          <div className={classes.container3}>
            <h1 className={classes.head1}>Projects</h1>
            <div className={classes.para2}>{count}</div>
          </div>
          <div className={classes.container3}>
            <h1 className={classes.head3}>Full-Stack</h1>
            <div className={classes.para4}>Developer</div>
          </div>
        </div>
      </div>
      <div className={classes.container2}>
        <h1 className={classes.head}>Skills:</h1>
        {skill.map((skill,index) => (
          <div key={index} className={classes.para}>
            <div>{skill.name} :</div>
            <div>{skill.skills}</div>
          </div>
        ))}
      </div>
      <div className={classes.container2}>
        <h1 className={classes.head}>Certifications:</h1>
        {certi.map((certif,index) => (
          <div key={index} className={classes.para}>
            <div>{certif.name} : <span>{certif.institute} - ({certif.date})</span></div>
          </div>
        ))}
      </div>
      <div className={classes.container0}>
        <div className={classes.container1_1}>
          <h1 className={classes.head}>Languages:</h1>
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
      </div>
      <a href='' target='_blank' className={classes.button}>Download Resume<span><img src={arrow} className={classes.img}/></span></a>
    </div>
  )
}

export default Engineer;