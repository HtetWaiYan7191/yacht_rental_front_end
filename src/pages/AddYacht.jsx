import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postYacht } from '../redux/yachtSlice';
import { useNavigate } from 'react-router';

const AddYacht = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const [yachtParams, setYachtParams] = useState({
    yacht: {
      name: '',
      description: '',
      model: '',
      image: '',
      fee_per_day: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setYachtParams((prev) => ({
      ...prev,
      yacht: {
        ...prev.yacht,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postYacht(yachtParams)).then((res) => {
      if (res.payload.status === 200) {
        navigate('/main');
      } else {
        setErrorMessage(res.payload.errorMessage);
      }
    });
  };

  return (
    <section className="lg:ml-[15%]">
      <div className="relative">
        <img
          src="https://d2x2jq9y4geyy8.cloudfront.net/default/Galene-Yacht-Charter-big-link-623ae52cbd0b4_v_default_big.jpeg"
          alt=""
          className="absolute h-screen w-screen object-fill"
        />
        <form
          onSubmit={handleSubmit}
          className="absolute flex h-screen w-full flex-col items-center justify-center bg-primary bg-opacity-[85%] px-7"
        >
          <h1 className="mb-5 text-center text-2xl font-bold text-white lg:mb-7 lg:text-4xl">
            Let&apos;s create a Yacht!
          </h1>
          <div className="flex w-full flex-col items-start justify-center md:w-[50%]">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Yacht Name"
              className="mb-5 w-full rounded-md border-2 border-white bg-primary p-2 text-white placeholder:text-white md:mb-7"
              required
            />
            <input
              type="text"
              name="description"
              onChange={handleChange}
              placeholder="Yacht description"
              className="mb-5 w-full rounded-md border-2 border-white bg-primary p-2 text-white placeholder:text-white md:mb-7"
              required
            />
            <input
              type="text"
              name="model"
              onChange={handleChange}
              placeholder="Yacht model"
              className="mb-5 w-full rounded-md border-2 border-white bg-primary p-2 text-white placeholder:text-white md:mb-7"
              required
            />
            <input
              type="text"
              name="image"
              onChange={handleChange}
              placeholder="Yacht image url link"
              className="mb-5 w-full rounded-md border-2 border-white bg-primary p-2 text-white placeholder:text-white md:mb-7"
              required
            />
            <input
              type="number"
              name="fee_per_day"
              min="0"
              onChange={handleChange}
              placeholder="Fee per fee_per_day"
              className="mb-5 w-full rounded-md border-2 border-white bg-primary p-2 text-white placeholder:text-white md:mb-7"
              required
            />
          </div>
          {errorMessage ? (
            <small className="mb-4 block text-red-600 lg:mb-6">{errorMessage}</small>
          ) : (
            <></>
          )}
          <button
            type="submit"
            className="rounded-full bg-white p-2 px-10 text-lg font-semibold text-primary"
          >
            Create New Yacht
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddYacht;
