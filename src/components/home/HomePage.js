import image from '../../all-project-assets/image-gallery/images/fallCollection.jpg'
import { useFetchRecomandedProductsQuery } from '../../store'
import PrimaryButton from '../shared/buttons/PrimaryButton'
import ImageSlade from './ImageSlide'
import ProductsSlide from './ProductsSlide'
const HomePage = () => {
  const slides = [{ image }, { image }, { image }]

  const { data, isSuccess } = useFetchRecomandedProductsQuery()

  isSuccess ? console.log(data) : console.log('loading')

  return (
    <>
      <div className="flex flex-col allign-center items-center gap-2 mx-auto max-w-[300px] lg:max-w-[1500px] md:max=w-[1200px] sm:max-w-[500px]">
        <div className="w-full mx-auto bg-zinc-200">
          <ImageSlade slides={slides} />
        </div>
        <div className="flex flex-col items-start allign-start my-24 w-full">
          <div>
            <h2 className="text-3xl font-bold p-2 mx-2">
              Best Selling Products
            </h2>
          </div>
          <div className="w-full mx-auto">
            <ProductsSlide recomandedProducts={data?.data?.bestSellings} />
          </div>
        </div>
        <div className="flex flex-col items-start allign-start my-24 w-full">
          <div>
            <h2 className="text-3xl font-bold p-2 mx-2">New Products</h2>
          </div>
          <div className="w-1/2 mx-auto">
            <ProductsSlide recomandedProducts={data?.data?.newProducts} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
