/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { fetchYachts } from "../redux/yachtSlice";
import { useDispatch, useSelector } from "react-redux";
import YachtCard from "../components/Yacht/YachtCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from "../components/Loading/Loading";
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Main.css'

import {Navigation } from 'swiper/modules';
import IconLink from "../components/IconLink/IconLink";


const Main = () => {
  const dispatch = useDispatch();
  const yachts = useSelector((state) => state.yacht.values);
  const loading = useSelector((state) => state.yacht.loading);

  useEffect(() => {
    dispatch(fetchYachts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <section className="main-section pt-10 flex justify-end">
          <main className="main-container w-[100%] lg:w-[80%] h-[115vh]">
            <h1 className="font-extrabold text-2xl lg:text-4xl text-center tracking-wider">LATEST MODELS</h1>
            <h2 className="font-semibold text-gray-500 text-center my-5">Please select a Yacht</h2>

            <div className="mt-10">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                {yachts?.map((yacht) => (
                  <SwiperSlide className="w-[70%] mx-auto" key={yacht.id}>
                    <YachtCard yacht={yacht} key={yacht.id} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </main>
        </section>
      )}
    </div>
  );
};


export default Main;
