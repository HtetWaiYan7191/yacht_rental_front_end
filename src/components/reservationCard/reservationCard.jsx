import { useDispatch } from 'react-redux';
import { deleteReservation } from '../../redux/reserveSlice';
import PropTypes from 'prop-types';

const ReservationCard = ({ reservation }) => {
  const start_date = new Date(reservation.start_date);
  const end_date = new Date(reservation.end_date);
  const timeDifference = end_date - start_date;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(deleteReservation(id));
  };

  return (
    <div className="relative rounded-md overflow-hidden bg-primary text-white">
      <figure>
        <img
          src={`${reservation.image}`}
          alt={`${reservation.yacht}`}
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </figure>
      <div className="relative flex flex-col justify-center gap-y-6 bg-black/50 p-4">
        <h1 className="text-center text-2xl font-semibold">{reservation.yacht}</h1>
        <p>
          <span className="font-semibold">Reserved By:</span> {reservation.user}
        </p>
        {/* <h2 className="underline">Reservation Details</h2> */}
        <div className="flex">
          <p className="w-[50%]">
            <span className="font-semibold">From: </span>
            {reservation.start_date}
          </p>
          <p className="w-[50%]">
            <span className="font-semibold">To: </span>
            {reservation.end_date}
          </p>
        </div>
        <div className="flex">
          <p className="w-[50%]">
            <span className="font-semibold">Duration: </span>
            {daysDifference} days
          </p>
          <p>
            <span className="font-semibold">City: </span>
            {reservation.city}
          </p>
        </div>
        <p className="">
          <span className="font-semibold">Total Cost: $</span>
          {reservation.total_value}
        </p>
        <button
          className="w-full border border-white py-2 font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
          onClick={() => {
            handleClick(reservation.id);
          }}
        >
          Delete Reservation
        </button>
      </div>
    </div>
  );
};

export default ReservationCard;

ReservationCard.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    yacht: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    total_value: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
