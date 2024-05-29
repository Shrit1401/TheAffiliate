import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

type SliderProps = {
  Cards: JSX.Element[];
};
export default ({ Cards }: SliderProps) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      breakpoints={{
        650: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 50000,
        disableOnInteraction: false,
      }}
    >
      {Cards.map((Card, index) => (
        <SwiperSlide key={index}>{Card}</SwiperSlide>
      ))}
    </Swiper>
  );
};
