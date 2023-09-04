const { SwiperSlide } = require('swiper/react')
const { default: SlideShow } = require('./SlideShow')

const ImageSlade = ({ slides }) => {
  return (
    <SlideShow slidesPerView={1} navigation pagination>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img className="w-full" src={slide.image} alt={slide.image} />
        </SwiperSlide>
      ))}
    </SlideShow>
  )
}

export default ImageSlade
