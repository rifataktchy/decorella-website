import React from 'react';
import background from '../assets/background.jpg';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#454646] flex flex-col justify-center items-center p-6' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      {/* Upper Section */}
      <div className='flex flex-col items-center max-w-[700px] w-full'>
        <form method='POST' action="" className='flex flex-col w-full'>
          <div className='py-2'>
            <p className='text-4xl font-bold inline border-b-4 text-black'>Contact</p>
            <p className='text-black py-2'>Submit the form below</p>
          </div>
          <input className='bg-[#a4a4a5] p-2 text-black' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#a5a4a4] text-black' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#a8a9aa] p-2 text-black' name="message" rows="8" placeholder='Message'></textarea>
          <button className='text-blue border-2 hover:bg-gray-500 hover:border-gray-500 px-4 py-2 my-1 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>

      {/* Lower Section */}
      <div className='flex justify-center w-full mt-4'>
        <a className='flex flex-col items-center text-facebook mr-4'
          href='https://www.facebook.com/decorellactg' target='_blank' rel=''>
        <FaFacebook size={30} />
        </a>

        <a className='flex flex-col items-center mr-4' 
          href='' target='_blank' rel=''>
          <HiOutlineMail size={30} />
        </a>

        <a className='flex flex-col items-center mr-4'
          href='' target='_blank' rel=''>
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  )
}

export default Contact;
