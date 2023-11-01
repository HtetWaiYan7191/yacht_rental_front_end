import './Reserve.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../redux/citySlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { postReservations } from '../../redux/reserveSlice';

const Reserve = () => {
  const cities = useSelector((state) => state.city.cities);
  const yachts = useSelector((state) => state.yacht.values);
  const userId = sessionStorage.getItem('current_user');
  const autoSelectedYacht = useLocation().state;
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newReservation, setNewReservation] = useState({
    reservation: {
      start_date: '',
      end_date: '',
      yacht_id: autoSelectedYacht ? autoSelectedYacht.id : '',
      user_id: userId,
      city_id: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReservation((prevReservation) => ({
      ...prevReservation,
      reservation: {
        ...prevReservation.reservation,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postReservations(newReservation)).then((res) => {
      if (res.payload.status === 200) {
        navigate('/reservation');
      } else {
        setErrorMessage(res.payload.errorMessage);
      }
    });
  };

  useEffect(() => {
    dispatch(fetchCities(newReservation));
  }, [dispatch, newReservation]);

  return (
    <>
      <div className="form-container">
        <div className="reservation-title">
          <h1 className=" text-3xl tracking-wider">
            {' '}
            Yacht is availbale and ready to be reserved!
          </h1>
          <hr />
          <p style={{ paddingTop: '5px' }}>
            {' '}
            Please fill the form below to reserve the yacht and enjoy, you can reserve the yacht.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="start_date">Start Date:</label>
            <input type="date" id="start_date" name="start_date" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="end_date">End Date:</label>
            <input type="date" id="end_date" name="end_date" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="city_id">Select City:</label>
            <select id="city_id" onChange={handleChange} name="city_id" required>
              <option value="" className="px-4">Select a city</option>
              {cities.map((city, index) => (
                <option key={index} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="yacht_id">Select Yacht:</label>
            <select id="yacht_id" onChange={handleChange} name="yacht_id" required defaultValue={autoSelectedYacht && autoSelectedYacht.id}>
              <option value="" className="px-4">Select a yacht</option>
              {yachts.map((yacht, index) => (
                <option
                  key={index}
                  value={yacht.id}
                >
                  {yacht.name}
                </option>
              ))}
            </select>
          </div>
          {errorMessage ? (
                      <small className="font-semibold text-red-600">{errorMessage}</small>
                    ) : (
                      <></>
                    )}
          <button type="submit" className="reserve-button">
            Reserve Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Reserve;
