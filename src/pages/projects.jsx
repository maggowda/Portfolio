import React,{useState,useEffect} from 'react'

const items = [
  { name: 'Project 1', category: 'Web' },
  { name: 'Project 2', category: 'Web' },
  { name: 'Project 3', category: 'Web Design' },
  { name: 'Project 4', category: 'Electronics' },
  { name: 'Project 5', category: 'Electronics' },
  { name: 'Project 6', category: 'Electronics' },
  { name: 'Project 7', category: 'AI/ML' },
  { name: 'Project 8', category: 'AI/ML' },
];

const classes = {
  container: 'flex flex-row w-screen mt-[160px] mb-[50px] gap-10 sm:gap-10 md:gap-10 lg:gap-6 lg:w-[1010px] md:w-[750px] sm:w-[360px] w-[360px]',
  container1: 'flex flex-col bg-[#141414] lg:ml-[10px] lg:h-[490px] lg:w-[260px] ml-[113px] h-[490px] w-[260px] md:ml-[35px] md:h-[490px] md:w-[260px] mb-[30px] sm:mb-[30px] md:mb-[30px] lg:mb-[30px] rounded-[30px] px-[40px] py-[30px] text-white sticky top-[100px]',
  container2: 'flex flex-row mr-[113px] mb-[30px]',
  container3: 'flex flex-row gap-8 sm:gap-8 md:gap-8 lg:gap-6 flex-wrap md:w-[390px] lg:w-[710px] sm:w-[390px] w-[390px]',
  container4: 'flex flex-col mb-[30px]',
  card: 'w-[390px] h-[230px] sm:w-[390px] sm:h-[230px] md:w-[390px] md:h-[230px] lg:w-[340px] lg:h-[230px] rounded-[30px] bg-zinc-700 flex-col flex justify-center items-center cursor-pointer',
  h1: 'text-[28px] mb-[20px]',
  option: 'w-[180px] mb-[10px] bg-[#1b1b1b] border-[1px] text-[17px] py-[6px] px-[20px] h-[40px] border-[#2e2e2e] hover:border-[#006cff] rounded-[10px] cursor-pointer',
  button: 'mt-[20px] pl-[-3px] hover:bg-[#006cff] flex pt-[9px] pb-[10px] items-center justify-center text-[16px] text-semibold bg-[#1b1b1b] border-solid inline border-[1px] border-zinc-700 hover:border-[#006cff] rounded-[30px] cursor-pointer',
  pro: 'ml-[-5px] text-[18px] mb-[20px]',
  span: 'bg-[#2e2e2e] px-[5px] rounded-[5px] border-[#1b1b1b] border-solid border-[1px]',
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
      <div className={classes.container1}>
        <div className={classes.h1}>Services</div>
        <div className={classes.container4}>
        {filters.map((category, idx) => (
          <div onClick={() => handleFilterButtonClick(category)} className={`${classes.option} ${selectedFilters?.includes(category) ? "active" : ""}`} key={idx}>
            {category}
          </div>
        ))}
      </div>
        <div className={classes.pro}>No. of projects - <span className={classes.span}>{items.length}</span></div>
        <div className={classes.button} onClick={handleResetButtonClick}>Reset</div>
      </div>
      <div className={classes.container2}>
        <div className={classes.container3}>
          {filteredItems.map((item, idx) => (
            <div key={idx} className={classes.card}>
              <p>{item.name}</p>
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;