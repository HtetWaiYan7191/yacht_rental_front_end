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
        navigate('/main');
      } else {
        setErrorMessage('Email or password is wrong. Please try again.');
        setError(true);
      }
    });
  };

  return (
    <>
      <div className="relative">
        <img
          src="https://d2x2jq9y4geyy8.cloudfront.net/default/Galene-Yacht-Charter-big-link-623ae52cbd0b4_v_default_big.jpeg"
          alt=""
          className="absolute h-screen w-screen object-fill"
        />
        <form
          onSubmit={handleSubmit}
          className="absolute flex h-screen w-full flex-col items-center justify-center bg-orange_bg bg-opacity-[85%] px-7"
        >
          <h1 className="mb-5 text-center text-2xl font-bold text-white lg:mb-8 lg:text-4xl">
            Welcome to our Yacht Rental App!
          </h1>
          <div className="flex w-full flex-col items-start justify-center md:w-[50%]">
            <input
              type="email"
              name="email"
              value={newSession.user.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="mb-5 w-full rounded-md p-2 md:mb-8"
              required
            />
            <input
              type="password"
              name="password"
              value={newSession.user.password}
              onChange={handleChange}
              placeholder="password"
              className="mb-5 w-full rounded-md p-2 md:mb-8"
              required
            />
            <small
              className={`${error ? 'mb-5 block font-semibold text-red-600 md:mb-8' : 'hidden'}`}
            >
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
            className="rounded-full bg-primary p-2 px-10 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110"
          >
            Log In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
