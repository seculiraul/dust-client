import { useNavigate } from 'react-router'
import useLinks from '../../hooks/shared/useLinks'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const {
    pathnames: { products },
  } = useLinks()
  const onClick = (code) => {
    navigate(`${products}/${code}`)
  }
  return (
    <div className="group">
      <div
        style={{ cursor: 'pointer' }}
        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
        onClick={() => onClick(product.code)}
      >
        <img
          src={product?.displayImage}
          alt={product?.displayImage}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <div className="flex flex-row gap-3">
        <p
          className={`mt-1 text-lg font-medium text-gray-900 ${
            product?.isOnSale ? 'line-through' : ''
          }`}
        >
          ${product.price}
        </p>
        {product?.isOnSale && (
          <p className="mt-1 text-lg font-medium text-red-600">
            ${product?.salePrice}
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductCard
