import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-orange_bg">
        <Link to="/login" className="rounded-full bg-primary p-2 px-5 font-semibold text-white">
          Log In
        </Link>

        <Link
          to="/signup"
          className="ml-3 rounded-full bg-primary p-2 px-5 font-semibold text-white"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default Splash;
