import React from 'react'

const classes = {
  container: 'flex flex-row justify-between w-screen mt-[170px] mb-[50px]',
  container1: 'flex flex-col ml-[113px]',
  container2: 'flex flex-col mr-[113px]',
  container3: 'flex flex-row gap-8',
  card: 'w-[390px] h-[230px] rounded-[30px] bg-zinc-700 mb-[30px] flex justify-center items-center',
}
const Projects = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div>Services</div>
        <div>Web</div>
        <div>Web Design</div>
        <div>Electronics</div>
        <div>AI/ML</div>
        <div>No. of projects <span>10</span></div>
        <div>Reset</div>
      </div>
      <div className={classes.container2}>
        <div className={classes.container3}>
          <div className={classes.card}>Project 1</div>
          <div className={classes.card}>Project 2</div>
        </div>
        <div className={classes.container3}>
          <div className={classes.card}>Project 3</div>
          <div className={classes.card}>Project 4</div>
        </div>
        <div className={classes.container3}>
          <div className={classes.card}>Project 5</div>
          <div className={classes.card}>Project 6</div>
        </div>
        <div className={classes.container3}>
          <div className={classes.card}>Project 7</div>
          <div className={classes.card}>Project 8</div>
        </div>
      </div>
    </div>
  )
}

export default Projects;