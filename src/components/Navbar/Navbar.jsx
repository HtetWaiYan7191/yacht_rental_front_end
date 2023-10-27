import { useLocation, useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/authenticationSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { AiOutlineMenu } from 'react-icons/ai';
// import { RxCross1 } from 'react-icons/rx';
import './Navbar.css';
import MobileMenuBar from '../MobileMenuBar/MobileMenuBar';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = sessionStorage.getItem('authToken');
  const pathNames = ['/login', '/signup', '/'];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

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
    <div className={`${token ? 'block' : 'hidden'}`}>
      <div className={`sideNav lg:w-[13%] ${isOpen ? 'z-30 w-[50%] transition' : 'w-0'}`}>
        <ul className="h-[80vh]">
          <li className="hidden lg:block">
            <h1 className="py-4 ps-5 font-bold text-black">Logo</h1>
          </li>
          <li className="">
            <NavLink
              to="/main"
              className="block px-4 py-4 text-[18px] font-bold"
              onClick={toggleMenu}
            >
              Yachts
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/reserve"
              className="block px-4 py-4 text-[18px] font-bold"
              onClick={toggleMenu}
            >
              Reserve
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/reservation"
              className="block px-4 py-4 text-[18px] font-bold"
              onClick={toggleMenu}
            >
              My Reservations
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/new/yacht"
              className="block px-4 py-4 text-[18px] font-bold"
              onClick={toggleMenu}
            >
              Add Yacht
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/delete/1/yacht "
              className="block px-4 py-4 text-[18px] font-bold"
              onClick={toggleMenu}
            >
              Delet Yacht
            </NavLink>
          </li>
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
      <nav className={`nav-container p-[2rem] lg:hidden ${isOpen ? 'ms-[60%]' : 'ms-0'}`}>
        <MobileMenuBar toggleMenu={toggleMenu} isOpen={isOpen} />
      </nav>
    </div>
  );
};

export default Navbar;
