import React from 'react'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='w-full bg-white text-blue-800'>
        <div className="max-w-[1080px]  p-6 text-center mx-auto justify-center sm:grid grid-cols-2 font-semibold  items-center">
            <div className='text-3xl mx-auto m-4 sm:m-1'>
           <div className='underline-offset-1 underline text-blue-800 duration-100'>
           तापमान्°
           </div>
            <div className="text-sm">
            Copyright © 2023 Varun Parmar. All rights reserved.
            </div>
            </div>
            <div className='mx-auto m-4 sm:m-1'>
                <div className='mb-1'>
                Socials
                </div>
                <div className="flex gap-2 mx-auto justify-center">
               <a href="https://github.com/tripleschezwanrice"  className='hover:text-slate-800 duration-100'> <AiFillGithub size={40}/>   </a>
                <a href="https://www.instagram.com/tripleschezwanrice/" className='hover:text-slate-800 duration-100'><AiFillInstagram size={40}/></a>
                <a target="_blank" href="https://www.linkedin.com/in/varun-parmar-a25b9624a" className='hover:text-slate-800'><AiFillLinkedin size={40}/></a>
                
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Footer
