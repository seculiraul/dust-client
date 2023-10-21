import { useGetOrdersQuery } from '../../../store'
import OrderCard from './OrderCard'

const Orders = () => {
  const { data, isSuccess } = useGetOrdersQuery()

  const renderedOrders = data?.data?.orders.map((order, index) => (
    <OrderCard order={order} key={index} />
  ))
  return (
    <>
      {isSuccess ? (
        <div className="flex flex-col space-y-4">
          {data?.data?.orders.length > 0 ? (
            renderedOrders
          ) : (
            <span className="p-4 pb-8 ml-12 font-bold text-xl">
              Currently you do not have any orders
            </span>
          )}
        </div>
      ) : (
        <span>Loading data</span>
      )}
    </>
  )
}
export default Orders
