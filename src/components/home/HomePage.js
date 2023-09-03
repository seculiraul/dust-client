import image from '../../all-project-assets/image-gallery/images/fallCollection.jpg'
import { useFetchRecomandedProductsQuery } from '../../store'
import ImageSlade from './ImageSlide'
import RecomandedProductsSlide from './RecomandedProductsSlide'
import SlideShow from './SlideShow'
const HomePage = () => {
  const slides = [{ image }, { image }, { image }]

  const { data, isSuccess } = useFetchRecomandedProductsQuery()

  isSuccess ? console.log(data) : console.log('loading')

  return (
    <>
      <div className="flex flex-col allign-center items-center gap-2 mx-auto max-w-[300px] lg:max-w-[1500px] md:max=w-[800px]">
        <div className="w-full mx-auto bg-zinc-200">
          <ImageSlade slides={slides} />
        </div>
        <div className="flex flex-col items-start allign-start my-24 w-full">
          <div>
            <h2>Hot products</h2>
          </div>
          <div className="w-full mx-auto bg-zinc-200 h-20">
            <RecomandedProductsSlide
              recomandedProducts={data?.data?.bestSellings}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
