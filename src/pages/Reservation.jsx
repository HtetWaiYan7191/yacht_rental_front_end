import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reserveSlice';
import Loading from '../components/Loading/Loading';
import NoData from '../components/NoData/NoData';
import ReservationCard from '../components/reservationCard/reservationCard';

const Reservation = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation.reservations);
  const userId = sessionStorage.getItem('current_user');
  const filteredReservations = reservations.filter((reservation) => reservation.user_id.toString() === userId);
  const isLoading = useSelector((state) => state.reservation.isLoading);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {filteredReservations.length < 1 ? (
            <NoData />
          ) : (
            <section className='lg:ml-[20%] mt-[4rem] lg:mt-0'>
              <div className="grid grid-cols-1 gap-5 p-2 lg:grid-cols-2">
                {filteredReservations.map((reservation, i) => (
                  <ReservationCard key={i} reservation={reservation} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Reservation;
