import React from 'react';
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';
import work4 from '../assets/work4.jpg';
import background from '../assets/background.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-black-300 bg-[#454646]' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-black-300'>Projets</p>
            <p className='py-6'>Check out some of our recent projects</p>
          </div>
          {/* Container*/}
          <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-2'>
             {/* Grid item*/}
             <div style={{ backgroundImage: `url(${work1})`, backgroundSize: 'cover' }} 
            className='h-[150px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              {/* hover effetcs*/}
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Project-1
                </span>
              </div>
            </div>

            <div style={{ backgroundImage: `url(${work2})`, backgroundSize: 'cover' }} 
            className='h-[150px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              {/* hover effetcs*/}
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Project-2
                </span>
              </div>
            </div>

            <div style={{ backgroundImage: `url(${work3})`, backgroundSize: 'cover' }} 
            className='h-[150px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              {/* hover effetcs*/}
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Project-3
                </span>
              </div>
            </div>
            
            <div style={{ backgroundImage: `url(${work4})`, backgroundSize: 'cover' }} 
            className='h-[150px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              {/* hover effetcs*/}
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Project-4
                </span>
              </div>
            </div>

          </div>

       </div>
    </div>
  )
}

export default Work;