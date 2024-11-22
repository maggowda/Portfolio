import React from 'react'

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
    skills:'Javascript, C/C++, Python, HTML, CSS, SQL.',
  },
  {
    name:'Full-Stack Frameworks',
    skills:'React.Js, Node.Js, Express.Js, Django, Next.Js, Tailwind.CSS.',
  },
  {
    name:'Tools',
    skills:'Git, GitHub, Figma, Canva, Excel, KiCAD, Arduino IDE, VS Code, ChatGPT, Design Spark.',
  },
  {
    name:'Database',
    skills:'MySQL, MongoDB.',
  }
]

const classes={
    container: 'flex flex-col items-center mt-[130px]',
}

const Engineer = () => {
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
      <div>
        <h1>Skills</h1>
        {skill.map((skill,index) => (
          <div key={index}>
            <div>{skill.name}</div>
            <div>{skill.skills}</div>
          </div>
        ))}
      </div>
      <div>
        <h1>Certifications</h1>
        {certi.map((certif,index) => (
          <div key={index}>
            <div>{certif.name}</div>
            <span>{certif.institute} - ({certif.date})</span>
          </div>
        ))}
      </div>
      <div>
        <h1>Education</h1>
        {edu.map((edu,index) => (
          <div key={index}>
            <div>{edu.name}</div>
            <div>{edu.institute} - ({edu.date})</div>
          </div>
        ))}
      </div>
      <div>
        <h1>Languages</h1>
        {lang.map((lang,index) => (
          <span key={index}>
            <span>{lang.name} </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Engineer;