import { Link } from 'react-router-dom';
import '../index.css';

const Splash = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-y-16 bg-orange_bg text-white">
        <h1 className="font-pacific text-5xl tracking-wider">Yacht Rental</h1>
        <div className="flex gap-x-8">
          <Link
            to="/login"
            className="rounded-full bg-primary p-2 px-8 font-semibold transition-all duration-300 ease-in-out hover:scale-110"
          >
            Log In
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-primary p-2 px-8 font-semibold transition-all duration-300 ease-in-out hover:scale-110"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Splash;
