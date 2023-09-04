import { Swiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const SlideShow = ({ children, slidesPerView, navigation, pagination }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      autoplay={{ delay: 3000 }}
      navigation={navigation}
      pagination={pagination ? { clickable: pagination } : false}
    >
      {children}
    </Swiper>
  )
}

export default SlideShow
