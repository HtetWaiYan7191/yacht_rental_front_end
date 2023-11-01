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
      <form
        onSubmit={handleSubmit}
        className="flex h-screen flex-col items-center justify-center bg-orange_bg px-7"
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
          <small className={`${error ? 'mb-4 block text-red-600 font-semibold lg:mb-6' : 'hidden'}`}>
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
          className="rounded-full bg-primary p-2 px-10 text-lg font-semibold text-white"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
