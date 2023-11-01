import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reserveSlice';
import Loading from '../components/Loading/Loading';
import NoData from '../components/NoData/NoData';
import ReservationCard from '../components/reservationCard/reservationCard';

const Reservation = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation.reservations);
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
          {reservations.length < 1 ? (
            <NoData />
          ) : (
            <section className='lg:ml-[20%]'>
              <div className="grid grid-cols-1 gap-5 p-2 lg:grid-cols-2">
                {reservations.map((reservation, i) => (
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
