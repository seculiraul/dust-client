import { useNavigate } from 'react-router'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const onClick = (code) => {
    navigate(`/products/${code}`)
  }
  return (
    <div key={product.code} className="group">
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
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </div>
  )
}

export default ProductCard
