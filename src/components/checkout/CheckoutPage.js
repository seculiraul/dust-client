import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAddOrderMutation, useGetUserDetailsQuery } from '../../store'
import CheckoutForm from './CheckoutForm'

const CheckoutPage = () => {
  const dispatch = useDispatch()
  const { items, totalCart } = useSelector((state) => state.cartDetails)
  const [totalOrder, setTotalOrder] = useState(totalCart)
  const [transportCost, setTransportCost] = useState(0)
  const { data, isSuccess } = useGetUserDetailsQuery()

  const [addOrder] = useAddOrderMutation()

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
