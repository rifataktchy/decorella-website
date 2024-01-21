import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import background from '../assets/background.jpg';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Home = () => {
    return (
    <div name='home' className= 'w-full h-screen bg-[#454646]' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }} >

        {/*container*/ }
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-purple-500'>Decorella</p>
          <h1 className='text-4xl sm:text-5xl font-bold text-[#8b8bb3]'>Interior designing firm</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Based on Chittagong</h2>
          <p className='text-[#8a91a3] py-4 max-w-[700px] '>INTERIOR & EXTERIOR DESIGN
CONSULTANCY & CONSTRUCTION
CORPORATE EVENT PLANNER
PRINTING SOLUTION</p>
        <div>
             
         <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-500 hover:border-purple-500'>
            <Link to='work' smooth={true} duration={500}>
            View Work
            </Link>
             <span className='group-hover:rotate-90 duration-300'>
             <HiArrowNarrowRight className='ml-3 '/>
             </span>
         </button>

         
      </div>
   </div>  
</div>
  )
}

export default Home;