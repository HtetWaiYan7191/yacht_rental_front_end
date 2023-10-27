/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { fetchYachts } from "../redux/yachtSlice";
import { useDispatch, useSelector } from "react-redux";
import YachtCard from "../components/Yacht/YachtCard";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Main.css'

import {Navigation } from 'swiper/modules';
import IconLink from "../components/IconLink/IconLink";


const Main = () => {
  const dispatch = useDispatch();
  const yachts = useSelector((state) => state.yacht.values);

  useEffect(() => {
    dispatch(fetchYachts());
  }, [dispatch]);

  console.log(yachts);
  return (
    <section className="main-section pt-10">
      <main className="main-container">
        <h1 className="font-bold text-2xl text-center">Latest Models</h1>
        <h2 className="font-semibold  text-gray-500 text-center my-5">
          Please select a Yacht
        </h2>

        <div className="mt-20">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {yachts?.map((yacht) => (
            <SwiperSlide className="w-[70%] mx-auto" key={yacht.id}>
            <YachtCard yacht={yacht} key={yacht.id} />
            </SwiperSlide>
          ))}

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
    </Swiper>

            <footer className="mt-10">
                <p className="text-center text-gray-400 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloribus assumenda
                     mollitia consectetur Veniam, perspiciatis itaque.</p>
                <IconLink/>
            </footer>
        </div>
      </main>
    </section>
  );
};

export default Main;
