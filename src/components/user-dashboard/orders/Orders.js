import OrderCard from './OrderCard'

const Orders = () => {
  const orders = [
    {
      title: 'order 1',
      date: '1-feb-2023',
      status: 'delivered',
      total: 100,
    },
    {
      title: 'order 2',
      date: '1-feb-2023',
      status: 'delivered',
      total: 100,
    },
    {
      title: 'order 3',
      date: '2-feb-2023',
      status: 'delivered',
      total: 100,
    },
    {
      title: 'order 4',
      date: '12-feb-2023',
      status: 'delivered',
      total: 12,
    },
  ]

  const renderedOrders = orders.map((order) => (
    <OrderCard order={order} key={order.title} />
  ))
  return <div className="flex flex-col space-y-4">{renderedOrders}</div>
}
export default Orders
