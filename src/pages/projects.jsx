import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: 'Exalyte', category: 'Web' , link: 'https://github.com/maggowda/HackHorizon-Exalyte'},
  { name: 'IEEE-ICAECC', category: 'Web' , link: 'https://github.com/maggowda/ieee-icaecc-website'},
  { name: 'Techniqed', category: 'Web Design', link: 'https://www.figma.com/design/Fcoqj3zCyleyG2Mdgzccpi/Techniqed-UI%2FUX?node-id=0-1&p=f&t=jzFEsq5umB5XjcG2-0' },
  { name: 'Black Friday Sales', category: 'AI/ML', link: 'https://github.com/maggowda/Black_Friday_Sales_Prediction' },
  { name: 'Vehicle Detection', category: 'AI/ML', link: 'https://github.com/maggowda/Vehicle_Detection' },
  { name: 'Project 4', category: 'Electronics', link: 'https://www.google.com' },
  { name: 'Project 5', category: 'Electronics', link: 'https://www.google.com' },
  { name: 'Project 6', category: 'Electronics', link: 'https://www.google.com' },
];

const classes = {
  container: 'flex flex-row w-screen justify-center mt-[80px] sm:mt-[80px] md:mt-[160px] lg:mt-[160px] mb-[50px] gap-4 sm:gap-4 md:gap-10 lg:gap-6 lg:w-[1010px] md:w-[750px] sm:w-[360px] w-[360px]',
  container1: 'flex flex-col bg-[#141414] lg:ml-[10px] lg:h-[490px] lg:w-[260px] ml-[10px] h-[290px] w-[120px] sm:ml-[10px] sm:h-[490px] sm:w-[260px] md:ml-[35px] md:h-[490px] md:w-[260px] mb-[5px] sm:mb-[5px] md:mb-[30px] lg:mb-[30px] sm:mb-[30px] md:mb-[30px] lg:mb-[30px] rounded-[15px] sm:rounded-[15px] md:rounded-[30px] lg:rounded-[30px] px-[20px] py-[20px] sm:px-[20px] sm:py-[5px] md:px-[40px] md:py-[30px] lg:px-[40px] lg:py-[30px] text-white sticky lg:top-[100px] md:top-[100px] sm:top-[80px] top-[80px]',
  container2: 'flex flex-row mb-[5px] sm:mb-[5px] md:mb-[30px] lg:mb-[30px]',
  container3: 'flex flex-row gap-4 sm:gap-4 md:gap-8 lg:gap-6 flex-wrap md:w-[390px] lg:w-[710px] sm:w-[220px] w-[220px]',
  container4: 'flex flex-col mb-[10px] sm:mb-[10px] md:mb-[30px] lg:mb-[30px]',
  card: 'w-[210px] h-[130px] sm:w-[210px] sm:h-[130px] md:w-[365px] md:h-[230px] lg:w-[340px] lg:h-[230px] rounded-[15px] sm:rounded-[15px] md:rounded-[30px] lg:rounded-[30px] bg-zinc-700 flex-col flex justify-center items-center cursor-pointer',
  h1: 'text-[14px] sm:text-[14px] md:text-[28px] lg:text-[28px] mb-[20px]',
  option: 'w-[80px] sm:w-[80px] md:w-[180px]  lg:w-[180px] mb-[10px] bg-[#1b1b1b] border-[1px] text-[8px] sm:text-[8px] md:text-[17px] py-[3px] sm:py-[3px] md:py-[6px] lg:py-[6px] px-[15px] px-[15px] md:px-[20px] lg:px-[20px] lg:text-[17px] lg:h-[40px] md:h-[40px] sm:h-[20px] h-[20px] border-[#2e2e2e] hover:border-[#006cff] rounded-[10px] cursor-pointer',
  button: 'mt-[5px] sm:mt-[5px] md:mt-[20px] lg:mt-[20px] w-[80px] sm:w-[80px] md:w-[180px] lg:w-[180px] pl-[-3px] hover:bg-[#006cff] flex pt-[4px] pb-[5px] sm:pt-[4px] sm:pb-[5px] md:pt-[9px] md:pb-[10px] lg:pt-[9px] lg:pb-[10px] items-center justify-center text-[10px] sm:text-[10px] md:text-[16px] lg:text-[16px] text-semibold bg-[#1b1b1b] border-solid inline border-[1px] border-zinc-700 hover:border-[#006cff] rounded-[30px] cursor-pointer',
  pro: 'ml-[-5px] text-[8px] sm:text-[8px] md:text-[18px] lg:text-[18px] mb-[10px]  sm:mb-[10px] md:mb-[20px] lg:mb-[20px]',
  span: 'bg-[#2e2e2e] px-[5px] rounded-[5px] border-[#1b1b1b] border-solid border-[1px]',
  header: 'w-[210px] h-[130px] sm:w-[210px] sm:h-[130px] md:w-[365px] md:h-[230px] lg:w-[340px] lg:h-[230px] rounded-[15px] sm:rounded-[15px] md:rounded-[30px] lg:rounded-[30px] flex-col flex justify-center items-center cursor-pointer opacity-0',
  hidden: 'hidden',
}

const fromBottom = {
  hidden: { y: 50, opacity: 0, scale: 0.5 },
  show: { y: 0, opacity: 1 , scale:1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: 'easeInOut',
    }
  }
}

const Projects = () => {

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  let filters = ["Web", "Web Design", "Electronics", "AI/ML"];

  const handleFilterButtonClick = (category) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(category)
        ? prevFilters.filter((filter) => filter !== category)
        : [...prevFilters, category]
    );
  };

  const handleResetButtonClick = () => {
    setSelectedFilters([]);
  };

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter((item) => selectedFilters.includes(item.category))
      );
    }
  }, [selectedFilters]);

  return (
    <div className={classes.container}>
      <motion.div variants={fromBottom} initial='hidden' animate='show' className={classes.container1}>
        <div className={classes.h1}>Services</div>
        <div className={classes.container4}>
        {filters.map((category, idx) => (
          <motion.div whileTap={{scale: 0.9}} onClick={() => handleFilterButtonClick(category)} className={`${classes.option} ${selectedFilters?.includes(category) ? "active" : ""}`} key={idx}>
            {category}
          </motion.div>
        ))}
      </div>
        <div className={classes.pro}>No. of projects - <span className={classes.span}>{items.length}</span></div>
        <motion.div whileTap={{scale: 0.9}} whileHover={{scale:1.05}} className={classes.button} onClick={handleResetButtonClick}>Reset</motion.div>
      </motion.div>
      <div className={classes.container2}>
        <div className={classes.container3}>
          {filteredItems.map((item, idx) => (
            <motion.a href={item.link} target='_blank' variants={fromBottom} initial='hidden' animate='show' key={idx} className={classes.card}>
              <motion.p className={classes.header} whileHover={{opacity:1}}>{item.name}</motion.p>
              <p className={classes.hidden}>{item.category}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;