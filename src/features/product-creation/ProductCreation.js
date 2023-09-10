import { useCreateProductMutation } from '../../store'
import ProductCreationForm from './ProductCreationForm'

const ProductCreation = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation()
  const submitNewProduct = (newProduct) => {
    createProduct(newProduct)
  }
  return <ProductCreationForm submitNewProduct={submitNewProduct} />
}

export default ProductCreation
