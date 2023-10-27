import { useLocation, useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/authenticationSlice';
import { useDispatch } from 'react-redux';
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = sessionStorage.getItem('authToken');
  const pathNames = ['/login', '/signup', '/'];

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
      <h1>This is Navbar</h1>
      <ul>
        <li>
          <button
            onClick={() => {
              handleLogout();
            }}
          >
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
