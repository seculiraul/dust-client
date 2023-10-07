import { useCreateProductMutation } from '../../../store'
import DetaildProductForm from '../../../components/shared/forms/DetaildProductForm'

const ProductCreation = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation()
  const submitNewProduct = (newProduct) => {
    createProduct(newProduct)
  }

  return (
    <DetaildProductForm prodcutValue={{}} submitNewProduct={submitNewProduct} />
  )
}

export default ProductCreation
