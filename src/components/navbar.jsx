import React, { useState } from 'react'
import {close, logo, menu} from '../assets';
import '../style';

import {navLinks} from '../constants';

const navbar = () => {
    // making a State for the menu button for opening menu options in phone view
    const [toggle, setToggle] = useState(false);

    return(
    // in nav tag properties of nav bar is defined this is the whole navbar from right to left 
    <nav className='bg-primary w-full flex py-6 navbar justify-between items-center '>
        {/* this is the logo which is visible in the navbar in the left corner */}
        <img src={logo} alt='hoobank' className='w-[124px] h-[32px]'/>

        {/* this is the unordered list tag which will contain all the menu items at the end/rightcorner of the navbar */}
        <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
            {/* Adding menu item to the navbar here by mapping them from navLinks */}
            {navLinks.map((nav, index)=>(
                <li key = {nav.id} className={` font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white`}>
                    <a href={`#${nav.id}`}>
                     {nav.title}    
                    </a>
                </li>
            ))}
        </ul>

        {/* making site phone responsive here */}
        <div className='sm:hidden flex flex 1 justify-end items-center'>
            <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contains' onClick={()=> setToggle((prev => !prev))}/>
            {/* this is the container div which contains menu items in phone view */}
            <div className={`${toggle? `flex` : `hidden`} bg-black-gradient absolute p-6 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex flex-col justify-end items-center flex-1 '>
                    {navLinks.map((nav, index)=>(
                        <li key = {nav.id} className={` font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white`}>
                            <a href={`#${nav.id}`}>
                            {nav.title}    
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
    )

}

export default navbar