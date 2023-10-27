import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/authenticationSlice';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [newSession, setNewSession] = useState({
    user: {
      email: '',
      password: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSession((prevSession) => ({
      ...prevSession,
      user: {
        ...prevSession.user,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(newSession)).then((res) => {
      if (res.payload) {
        navigate('/home');
      } else {
        setErrorMessage('Email or password is wrong. Please try again.');
        setError(true);
      }
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex h-screen flex-col items-center justify-center bg-orange_bg px-7"
      >
        <h1 className="mb-5 text-center text-2xl font-bold text-white lg:mb-8 lg:text-4xl">
          Welcome to our Yacht Rental App!
        </h1>
        <div className='flex flex-col items-start md:w-[50%] justify-center w-full'>
          <input
            type="email"
            name="email"
            value={newSession.user.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="mb-5 w-full rounded-md p-2 md:mb-8"
          />
          <input
            type="password"
            name="password"
            value={newSession.user.password}
            onChange={handleChange}
            placeholder="password"
            className="mb-5 w-full rounded-md p-2 md:mb-8"
          />
          <small className={`${error ? 'mb-5 block text-red-600 md:mb-8' : 'hidden'}`}>
            {errorMessage}
          </small>
          <span className="mb-5 text-lg text-white md:mb-8">
            Don&apos;t have an account yet?
            <br />
            <Link to={'/signup'} className="font-bold underline">
              Sign Up here
            </Link>
          </span>
        </div>
        <button
          type="submit"
          className="rounded-full bg-primary p-2 px-10 text-lg font-semibold text-white"
        >
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;