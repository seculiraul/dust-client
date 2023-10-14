import { useLocation } from 'react-router'
import DetaildProductForm from '../../../components/shared/forms/DetaildProductForm'
import { useEditProductMutation } from '../../../store'

const EditProduct = () => {
  const [editProduct] = useEditProductMutation()
  const { state } = useLocation()

  const onSubmitClick = async (data) => {
    console.log({ id: state?.product?._id, editProduct: data })
    await editProduct({ id: state?.product?._id, editProduct: data })
  }

  return (
    <DetaildProductForm
      prodcutValue={state?.product}
      onSubmitClick={onSubmitClick}
    />
  )
}

export default EditProduct
