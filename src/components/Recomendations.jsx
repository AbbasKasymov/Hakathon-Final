import React, { useContext, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { clientContext } from "../contexts/ClientContext";
import RecomendationCard from "./RecomendationCard";

export default function Recomendations(item) {
  const data = useContext(clientContext);
  const { getProduct, products } = data;

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <h2 style={{ margin: "40px 0px" }}>Recomendations</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((item, index) => (
          <SwiperSlide>
            <RecomendationCard key={index} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
