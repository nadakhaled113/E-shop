import React from 'react';
import Heading from '../Shared/Heading';
import blog1 from"../../assets/blogs/blog-1.jpg";
import blog2 from"../../assets/blogs/blog-2.jpg";
import blog3 from"../../assets/blogs/blog-3.jpg";

const BlogData =[
{
    title: "How to choose perfect smartwatch",
    subtitle: "minmia facere deserunt velo illo beatae deleniti eius dolores consequutur, eligendi corporis maiores molestiae landantium, porro?",
    published: "jan 20, 2024 by Dilshad",
    image: blog1,
    aosDelay:"0",
},

{
    title: "How to choose perfect gadget",
    subtitle: "minmia facere deserunt velo illo beatae deleniti eius dolores consequutur, eligendi corporis maiores molestiae landantium, porro?",
    published: "jan 20, 2024 by Dilshad",
    image: blog2,
    aosDelay:"200",
},

{
    title: "How to choose perfect VR headset",
    subtitle: "minmia facere deserunt velo illo beatae deleniti eius dolores consequutur, eligendi corporis maiores molestiae landantium, porro?",
    published: "jan 20, 2024 by Dilshad",
    image: blog3,
    aosDelay:"400"
},
]

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
          {/* Heading Section */}
          <Heading title="Recent News" subtitle="Explore Oye Blogs"/>

        {/* Blogs Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {/* Blog Cards */}
        {  BlogData.map((data) => (
            <div 
            data-aos = "fade-up"
            data-aos-delay ={data.aosDelay}
            key={data.title} className='bg-white dark:bg-gray-900'> 
                {/* img section */}
                <div className='overflow-hidden rounded-2xl mb-2 h-300 w-300'>
                    <img src={data.image} alt="" 
                    className='w-full  h-220 object-cover rounded-2xl hover:scale-105 duration-500'
                    />
                </div>
                {/* content section */}
                <div className='space-y-2'>
                    <p className='text-xs text-gray-500'>{data.published}</p>
                    <p className='font-bold line-clamp-1'>{data.title}</p>
                    <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                </div>
            </div>
        ))}

        </div>

      </div>

    </div>
  )
}

export default Blogs