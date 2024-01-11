import React from 'react';
import portfolio from '../assets/portfolio.jpeg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#454646]'>
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-6'>Check out some of my recent work</p>
          </div>
          {/* Container*/}
          <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-2'>
             {/* Grid item*/}
            <div style={{ backgroundImage: `url(${portfolio})`, backgroundSize: 'cover' }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              {/* hover effetcs*/}
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application
                </span>
                <div className='pt-8 text-center'>
                <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                </div>
              </div>
            </div>

            <div style={{ backgroundImage: `url(${portfolio})`, backgroundSize: 'cover' }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              {/* hover effetcs*/}
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application
                </span>
                <div className='pt-8 text-center'>
                <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                </div>
              </div>
            </div>

            <div style={{ backgroundImage: `url(${portfolio})`, backgroundSize: 'cover' }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              {/* hover effetcs*/}
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application
                </span>
                <div className='pt-8 text-center'>
                <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                </div>
              </div>
            </div>


          </div>

       </div>
    </div>
  )
}

export default Work;