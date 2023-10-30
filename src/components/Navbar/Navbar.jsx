/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import { BiArrowBack } from 'react-icons/bi'
import './Navbar.css'
import MobileMenuBar from '../MobileMenuBar/MobileMenuBar'
import { logOut } from '../../redux/authenticationSlice';
import { useDispatch } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const token = sessionStorage.getItem('authToken');
  const pathNames = ['/login', '/signup', '/'];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };
  
  const handleGoBack = () => {
    navigate(-1)
  }

  const handleLogout = () => {
    dispatch(logOut(token)).then(() => {
      sessionStorage.clear();
      navigate('/login');
    });
  };
  if (pathNames.includes(location.pathname)) {
    return null;
  }
  return (
    <>
    {/* <div className={`${token ? 'block' : 'hidden'}`}></div> */}
    <div className={`sideNav lg:w-[13%] ${isOpen ? 'w-[50%] transition z-30' : 'w-0'}`}>
      <ul className='h-[80vh]'>
        <li className='hidden lg:block'><h1 className='font-bold text-black ps-5 py-4'>Logo</h1></li>
        <li className=''><NavLink to='/main' className='block px-4 text-[18px] py-4 font-bold' onClick={toggleMenu}>Yachts</NavLink></li>
        <li className=''><NavLink to='/reserve' className='block px-4 text-[18px] py-4 font-bold' onClick={toggleMenu}>Reserve</NavLink></li>
        <li className=''><NavLink to='/reservation' className='block px-4 text-[18px] py-4 font-bold' onClick={toggleMenu}>My Reservations</NavLink></li>
        <li className=''><NavLink to='/new/yacht' className='block px-4 text-[18px] py-4 font-bold' onClick={toggleMenu}>Add Yacht</NavLink></li>
        <li className=''><NavLink to='/delete' className='block px-4 text-[18px] py-4 font-bold' onClick={toggleMenu}>Delet Yacht</NavLink></li>
        <li>
            <button
              onClick={() => {
                handleLogout();
              }}
              className="block px-4 py-4 text-[18px] font-bold"
            >
              Sign Out
            </button>
          </li>
      </ul>
    
        <div className="nav-footer hidden lg:block">
          <ul className="social-links-container ms-5 flex ">
            <li>
              <i className="fab fa-facebook-f me-4 text-sm text-gray-700"></i>
            </li>
            <li>
              <i className="fab fa-google-plus-g me-4 text-sm text-gray-700"></i>
            </li>
            <li>
              <i className="fab fa-twitter me-4 text-sm text-gray-700"></i>
            </li>
            <li>
              <i className="fab fa-pinterest-p me-4 text-sm text-gray-700"></i>
            </li>
            <li>
              <i className="fab fa-vimeo-v me-4 text-sm text-gray-700"></i>
            </li>
          </ul>
          <small className="my-2 ms-5 block text-[10px] font-bold text-gray-500">
            @2015 PIAGGIO $ C.S P.A. PIVA
          </small>
        </div>


    </div>
    <nav className={`p-[1rem] nav-container lg:hidden ${currentPath !== '/main' ? ('shadow-md bg-primary text-white') : ('')} ${isOpen ? 'ms-[60%]' : 'ms-0'}`}>
        {currentPath !== '/main' ? (<BiArrowBack className='text-2xl' onClick={handleGoBack}/>)  : (<MobileMenuBar toggleMenu={toggleMenu} isOpen={isOpen}/>)}
    </nav>
    </>
  )
}

export default Navbar;
