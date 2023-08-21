import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutForm from './CheckoutForm'

const CheckoutPage = () => {
  const dispatch = useDispatch()
  const { items, totalCart } = useSelector((state) => state.cartDetails)
  const [totalOrder, setTotalOrder] = useState(totalCart)

  const onDeliveryChange = (option) => {
    let additionalCost = 10
    if (option === 'fastCourier') {
      additionalCost = 15
    }
    setTotalOrder(() => totalCart + additionalCost)
  }

  const onSubmit = (info) => {
    addOrder(cart, 10, info)
  }
  return (
    <>
      <CheckoutForm
        totalCart={totalOrder}
        onSubmit={onSubmit}
        onDeliveryChange={onDeliveryChange}
      />
    </>
  )
}

export default CheckoutPage
