/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import { BiArrowBack } from 'react-icons/bi'
import './Navbar.css'
import MobileMenuBar from '../MobileMenuBar/MobileMenuBar'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();
const navigate = useNavigate();
  const currentPath = location.pathname;

  const toggleMenu = (e) => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };
  
  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <>
    <div className={`sideNav lg:w-[13%] ${isOpen ? 'w-[50%] transition z-30' : 'w-0'}`}>
      <ul className='h-[80vh]'>
        <li className='hidden lg:block'><h1 className='font-bold text-black ps-5 py-4'>Logo</h1></li>
        <li className=''><NavLink to='/main' className='block px-4 text-[18px] py-4 font-bold' onClick={toggleMenu}>Yachts</NavLink></li>
        <li className=''><NavLink to='/reserve' className='block px-4 text-[18px] py-4 font-bold' onClick={toggleMenu}>Reserve</NavLink></li>
        <li className=''><NavLink to='/reservation' className='block px-4 text-[18px] py-4 font-bold' onClick={toggleMenu}>My Reservations</NavLink></li>
        <li className=''><NavLink to='/new/yacht' className='block px-4 text-[18px] py-4 font-bold' onClick={toggleMenu}>Add Yacht</NavLink></li>
        <li className=''><NavLink to='/delete' className='block px-4 text-[18px] py-4 font-bold' onClick={toggleMenu}>Delet Yacht</NavLink></li>
      </ul>
        
      <div className='nav-footer hidden lg:block'>
        <ul className="social-links-container flex ms-5 ">
          <li><i className='fab fa-facebook-f text-gray-700 me-4 text-sm'></i></li>
          <li><i className='fab fa-google-plus-g text-gray-700 me-4 text-sm'></i></li>
          <li><i className='fab fa-twitter text-gray-700 me-4 text-sm'></i></li>
          <li><i className='fab fa-pinterest-p text-gray-700 me-4 text-sm'></i></li>
          <li><i className='fab fa-vimeo-v text-gray-700 me-4 text-sm'></i></li>
        </ul>
        <small className='text-gray-500 text-[10px] ms-5 my-2 block font-bold'>@2015 PIAGGIO $ C.S P.A. PIVA</small>
      </div>

    </div>
    <nav className={`p-[1rem] nav-container lg:hidden ${currentPath !== '/main' ? ('shadow-md') : ('')} ${isOpen ? 'ms-[60%]' : 'ms-0'}`}>
        {currentPath !== '/main' ? (<BiArrowBack className='text-2xl' onClick={handleGoBack}/>)  : (<MobileMenuBar toggleMenu={toggleMenu} isOpen={isOpen}/>)}
    </nav>
    </>
  )
}

export default Navbar
