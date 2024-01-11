import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#454646] flex justify-center items-center p-6'>
        <form method='POST' action="https://getform.io/f/7be51bc1-6689-46ce-aba4-7b08687ce34d" className='flex flex-col max-w-[600px] w-full'>
            <div className='py-2'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-2'>Submit the form below or shoot me an email - rifataktchy@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-purple-500 hover:border-purple-500 px-4 py-2 my-1 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact;