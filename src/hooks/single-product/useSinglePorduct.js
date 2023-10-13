import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import {
  useDeleteProductMutation,
  useFetchSingleProductQuery,
} from '../../store'
import { addProductToCart } from '../../store/slices/cartSlice'
import useLinks from '../shared/useLinks'

const useSingleProduct = () => {
  const dispatch = useDispatch()
  const { code } = useParams()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)
  const { data } = useFetchSingleProductQuery(code)
  const [deleteProduct] = useDeleteProductMutation()

  const [product, setProduct] = useState({})
  const [dialogOpen, setDialogOpen] = useState(false)

  const {
    pathnames: { products, productEditor },
  } = useLinks()

  useEffect(() => {
    const otherColors = data?.data?.product?.otherColors.map(
      ({ color, code }) => {
        return {
          color,
          class: `bg-${color}-500`,
          onClick: () => navigate(`${products}/${code}`),
        }
      }
    )
    const breadcrumbs = [
      { id: 1, name: data?.data?.product?.gender, link: '/men' },
      { id: 2, name: data?.data?.product?.name },
    ]

    setProduct({ ...data?.data?.product, otherColors, breadcrumbs })
  }, [data])

  const dialogProps = {
    open: dialogOpen,
    title: 'Product Deletion',
    description: 'Do you want to delete this product?',
    confirm: 'Confirm',
    cancel: 'Cancel',
    onConfirm: () => onConfirmDialog(),
    onCancel: () => onCancelDialog(),
  }

  const onAddToCart = (selectedSize) => {
    dispatch(
      addProductToCart({
        ...product,
        size: selectedSize,
      })
    )
  }

  const onDeleteClick = (e) => {
    e.preventDefault()
    setDialogOpen(true)
  }

  const onConfirmDialog = async () => {
    await deleteProduct(product?._id)
    navigate(products)
    setDialogOpen(false)
  }

  const onCancelDialog = () => {
    setDialogOpen(false)
  }

  const onEditClick = () => {
    navigate(productEditor, {
      state: { product: data?.data?.product },
    })
  }

  return {
    product,
    user,
    dialogProps,
    onAddToCart,
    onDeleteClick,
    onEditClick,
  }
}

export default useSingleProduct
