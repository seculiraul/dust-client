import { SwiperSlide } from 'swiper/react'
const { default: ProductCard } = require('../shared/PtroductCard')
const { default: SlideShow } = require('./SlideShow')

const RecomandedProductsSlide = ({ recomandedProducts }) => {
  return (
    <SlideShow slidesPerView={3} navigation pagination={false}>
      {recomandedProducts?.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductCard key={product?.code} product={product} />
        </SwiperSlide>
      ))}
    </SlideShow>
  )
}

export default RecomandedProductsSlide
