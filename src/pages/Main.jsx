import { useEffect } from 'react';
import { fetchYachts } from '../redux/yachtSlice';
import { useDispatch, useSelector } from 'react-redux';
import YachtCard from '../components/Yacht/YachtCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import IconLink from '../components/IconLink/IconLink';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Main.css';

const Main = () => {
  const dispatch = useDispatch();
  const yachts = useSelector((state) => state.yacht.values);

  useEffect(() => {
    dispatch(fetchYachts());
  }, [dispatch]);

  return (
    <section className="main-section flex justify-end pt-10 ">
      <main className="main-container h-[115vh] w-[100%] lg:w-[80%]">
        <h1 className=" text-center text-2xl font-extrabold tracking-wider lg:text-4xl">
          LATEST MODELS
        </h1>
        <h2 className="my-5  text-center font-semibold text-gray-500">Please select a Yacht</h2>

        <div className="mt-10">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            spaceBetween={16} // Adjust the space between slides
            slidesPerView={1} // Number of slides to show on initial load
            breakpoints={{
              // Define breakpoints for different screen sizes
              768: {
                slidesPerView: 3, // Show 3 slides on screens wider than 768px
              },
            }}
          >
            {yachts?.map((yacht) => (
              <SwiperSlide className="mx-auto w-[70%]" key={yacht.id}>
                <YachtCard yacht={yacht} key={yacht.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </section>
  );
};

export default Main;
