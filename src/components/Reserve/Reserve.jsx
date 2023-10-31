import './Reserve.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../redux/citySlice';
import { useLocation } from 'react-router-dom';
import { postReservations } from '../../redux/reserveSlice';

const Reserve = () => {
  const cities = useSelector((state) => state.city.cities);
  const yachts = useSelector((state) => state.yacht.values);
  const userId = useSelector((state) => state.authentication.user_id);
  const autoSelectedYacht = useLocation().state;
  const dispatch = useDispatch();

  const [newReservation, setNewReservation] = useState({
    reservation: {
      start_date: '',
      end_date: '',
      yacht_id: autoSelectedYacht.id,
      user_id: userId,
      city_id: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e)
    console.log(name,value)
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
    dispatch(postReservations(newReservation))
  }

  useEffect(() => {
    dispatch(fetchCities(newReservation));
  }, [dispatch]);

  return (
    <>
      <div className="form-container">
        <div className="reservation-title">
          <h1> Yacht is availbale and ready to be reserved!</h1>
          <hr />
          <p style={{ paddingTop: '5px' }}>
            {' '}
            Please fill the form below to reserve the yacht and enjoy, you can reserve the yacht.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="date" name="start_date" onChange={handleChange} />
          <input type="date" name="end_date" onChange={handleChange} />
          <select onChange={handleChange} name="city_id">
            <option value="">Select a city</option>
            {cities.map((city, index) => (
              <option key={index} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          <select onChange={handleChange} name="yacht_id">
            <option value="">Select a yacht</option>
            {yachts.map((yacht, index) => (
              <option
                key={index}
                value={yacht.id}
                selected={
                  autoSelectedYacht && autoSelectedYacht.id === yacht.id ? 'defaultValue' : ''
                }
              >
                {yacht.name}
              </option>
            ))}
          </select>
          <button type="submit" className="reserve-button">
            Reserve Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Reserve;
