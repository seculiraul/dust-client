const { SwiperSlide } = require('swiper/react')
const { default: SlideShow } = require('./SlideShow')

const ImageSlade = ({ slides }) => {
  return (
    <SlideShow>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img className="w-full" src={slide.image} alt={slide.image} />
        </SwiperSlide>
      ))}
    </SlideShow>
  )
}

export default ImageSlade
