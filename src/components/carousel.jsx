import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const classes = {
    carousel: 'w-[1100px] mt-[40px] mb-[100px]',
    skill: 'text-[18px] text-center text-semibold bg-[#141414] border-solid border-[2px] border-zinc-700 hover:text-[#006cff] px-[50px] py-[13px] rounded-full',
  };

const skills=[
    {
        name:'Web Development'
    },
    {
        name:'Web Design'
    },
    {
        name:'App Design'
    },
    {
        name:'UI/UX Design'
    },
    {
        name:'Product Design'
    },
    {
        name:'Art Direction'
    },
    {
        name:'Photography'
    },
    {
        name:'Poster Design'
    }
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",}}
        onClick={onClick}
      />
    );
  }

const Carousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
      cssEase: "ease-in-out",
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  return (
    <div className={classes.carousel}>
        <Slider {...settings}>
            {skills.map((skill, index) => (
            <div key={index} className={classes.skill}>
                {skill.name}
            </div>
            ))}
        </Slider>
    </div>
  )
}

export default Carousel;