const { default: ProductCard } = require('../shared/PtroductCard')
const { default: SlideShow } = require('./SlideShow')

const RecomandedProductsSlide = ({ recomandedProducts }) => {
  return (
    <SlideShow>
      {recomandedProducts?.map((product) => {
        return <ProductCard key={product?.code} product={product} />
      })}
    </SlideShow>
  )
}

export default RecomandedProductsSlide
