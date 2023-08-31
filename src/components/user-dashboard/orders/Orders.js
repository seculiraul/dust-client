import { useGetOrdersQuery } from '../../../store'
import OrderCard from './OrderCard'

const Orders = () => {
  const { data, isSuccess } = useGetOrdersQuery()

  const renderedOrders = data?.data?.orders.map((order) => (
    <OrderCard order={order} key={order.title} />
  ))
  return (
    <>
      {isSuccess ? (
        <div className="flex flex-col space-y-4">{renderedOrders}</div>
      ) : (
        <span>Loading data</span>
      )}
    </>
  )
}
export default Orders
