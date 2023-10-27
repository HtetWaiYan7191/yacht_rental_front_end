/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import './Navbar.css'
import MobileMenuBar from '../MobileMenuBar/MobileMenuBar'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = (e) => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };
  

  return (
    <>
    <div className={`sideNav ${isOpen ? 'w-[50%] transition z-30' : 'w-0'}`}>
      <ul>
        {/* <li className='p-3 text-5xl' onClick={toggleMenu}><RxCross1/></li> */}
        <li className=''><NavLink to='/main' className='block px-4 text-[18px] py-4 font-semibold' onClick={toggleMenu}>Yachts</NavLink></li>
        <li className=''><NavLink to='/reserve' className='block px-4 text-[18px] py-4 font-semibold' onClick={toggleMenu}>Reserve</NavLink></li>
        <li className=''><NavLink to='/reservation' className='block px-4 text-[18px] py-4 font-semibold' onClick={toggleMenu}>My Reservations</NavLink></li>
        <li className=''><NavLink to='/new/yacht' className='block px-4 text-[18px] py-4 font-semibold' onClick={toggleMenu}>Add Yacht</NavLink></li>
        <li className=''><NavLink to='/delete/1/yacht ' className='block px-4 text-[18px] py-4 font-semibold' onClick={toggleMenu}>Delet Yacht</NavLink></li>
      </ul>
        

    </div>
    <nav className={`p-[2rem] nav-container ${isOpen ? 'ms-[60%]' : 'ms-0'}`}>
        <MobileMenuBar toggleMenu={toggleMenu} isOpen={isOpen}/>
    </nav>
    </>
  )
}

export default Navbar
