import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

type SliderProps = {
  //   array of cards
  Cards: JSX.Element[];
};
export default ({ Cards }: SliderProps) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      navigation
      centeredSlides={true}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {Cards.map((Card, index) => (
        <SwiperSlide key={index}>{Card}</SwiperSlide>
      ))}
    </Swiper>
  );
};
