import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/authenticationSlice';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      user: {
        name: name,
        email: email,
        password: password,
      },
    };

    dispatch(signUp(newUser)).then((res) => {
      if (res.payload.status.code === 404) {
        const errorMessage = res.payload.error.message;
        setErrorMessage(errorMessage);
        setError(true);
      } else {
        navigate('/login');
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
          <h1 className="mb-4 text-center text-2xl font-bold text-white lg:mb-6 lg:text-4xl">
            Let&apos;s have fun with our yachts !
          </h1>
          <div className="flex w-full flex-col items-start justify-center md:w-[50%]">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="mb-5 w-full rounded-md p-2"
              required
            />
            <input
              type="text"
              value={name}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              className="mb-5 w-full rounded-md p-2"
              required
            />
            <input
              type="password"
              value={password}
              placeholder="Password (minimum 8 characters)"
              onChange={(e) => setPassword(e.target.value)}
              className="mb-5 w-full rounded-md p-2"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              placeholder="Type your password again"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mb-5 w-full rounded-md p-2"
              required
            />
            <small
              className={`${error ? 'mb-4 block font-semibold text-red-600 lg:mb-6' : 'hidden'}`}
            >
              {errorMessage}
            </small>
            <span className="mb-5 text-lg text-white">
              Already have an account?
              <br />
              <Link to={'/login'} className="font-bold underline">
                Log In
              </Link>
            </span>
          </div>
          <button
            type="submit"
            className="rounded-full bg-primary p-2 px-10 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
