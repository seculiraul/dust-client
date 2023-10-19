import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import useLinks from '../../hooks/shared/useLinks'
import { useAddOrderMutation, useGetUserDetailsQuery } from '../../store'
import { removeAllItems } from '../../store/slices/cartSlice'
import CheckoutForm from './CheckoutForm'

const CheckoutPage = () => {
  const { items, totalCart } = useSelector((state) => state.cartDetails)
  const [totalOrder, setTotalOrder] = useState(totalCart)
  const [transportCost, setTransportCost] = useState(0)
  const { data, isSuccess } = useGetUserDetailsQuery()

  const [addOrder] = useAddOrderMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    pathnames: { home },
  } = useLinks()

  const onDeliveryChange = (option) => {
    if (option === 'fastCourier') {
      setTransportCost(() => 15)
    } else {
      setTransportCost(() => 10)
    }
  }

  useEffect(() => {
    setTotalOrder(() => totalCart + transportCost)
  }, [transportCost])

  const onSubmit = async (info) => {
    const products = items.map(({ _id: id, quantity, size }) => ({
      id,
      quantity,
      size,
    }))
    await addOrder({ products, total: totalOrder, transportCost, ...info })
    dispatch(removeAllItems())
    navigate(home)
  }
  return (
    <>
      <CheckoutForm
        totalCart={totalOrder}
        onSubmit={onSubmit}
        onDeliveryChange={onDeliveryChange}
        userDetails={isSuccess ? data?.data : {}}
      />
    </>
  )
}

export default CheckoutPage
