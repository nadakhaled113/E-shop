import React from 'react';
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/hero/watch.png";
import Image3 from "../../assets/hero/macbook.png";
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphone"
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Virtual"
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Beats Solo",
        title: "Branded",
        title2: "Laptops"
    },
];

const Hero = ({handleOrderPopup}) => {
    const settings ={
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
  return (
    <div className='container'>
        <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color
        flex justify-center items-center
        '>
         {/* Hero section */}
        <div className='container pb-8 sm:pb-0'>
           <Slider {...settings}>
            {
                HeroData.map((data) => (
                    <div key={data.id}>
                     <div className='grid grid-cols-1 sm:grid-cols-2'>
                        {/* text content section */}
                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                        <h1 data-aos = "zoom-out" data-aos-duration = "500" data-aos-once = "true" 
                        className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                        <h1 data-aos = "zoom-out" data-aos-duration = "500" data-aos-once = "true" 
                        className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                        <h1 data-aos = "zoom-out" data-aos-duration = "500" data-aos-once = "true" 
                        className='text-5xl uppercase text-white dark:text-white/5 sm:text-80 md:text-100 xl:text-150 font-bold'>{data.title2}</h1>
                        <div data-aos = "fade-up" data-aos-duration = "500" data-aos-offset = "0" data-aos-delay = "200" >
                           <Button text="Shop by category" bgColor="bg-primary" textColor="text-white" handler ={handleOrderPopup} />
                        </div>
                    </div> 
                    {/* Image Section */}
                    <div className='order-1 sm:order-2'>
                        <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                            <img 
                                src={data.img} 
                                alt=""
                                className='w-300 sm:w-450 h-300 sm:h-450 sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-lg-[-8px-4px-6px-rgba(0,0,0,0.4)] relative z-40'
                            />
                        </div>
                    </div>
                    </div>
                    </div>
                
                ))
            }
           </Slider>
           </div>
        </div>
    </div>
  )
}

export default Hero;
