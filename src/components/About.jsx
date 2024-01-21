import React from 'react';
import background from '../assets/background.jpg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#454646] text-black-300' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
        <div className='flex flex-col justify-center items-center w-full h-full'>
           <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline'>About</p>
              </div>
               
               <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-right text-4xl font-bold'>
                  <p>Nice to meet you. Please take a look around.</p>
                  </div>
                  <div>
                  <p>We specialize in interior design consultancy, event planning, and printing solutions as part of our comprehensive services at our interior designing firm.</p>  
                  </div>
            </div>
           
        </div>
    </div>
  )
}

export default About;