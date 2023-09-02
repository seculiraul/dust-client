import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const SlideShow = ({ slides }) => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      spaceBetween={2}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            className="w-full"
            src={slide.image}
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SlideShow
