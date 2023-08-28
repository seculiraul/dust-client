import { useNavigate } from 'react-router'

const ProductList = ({ products }) => {
  const navigate = useNavigate()
  const onClick = (code) => {
    navigate(`/products/${code}`)
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
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
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
