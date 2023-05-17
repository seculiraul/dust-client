const OrderCard = ({ order }) => {
  return (
    <div className="bg-zinc-100 rounded-md shadow-md p-2 m-2 cursor-pointer hover:bg-zinc-200 duration-200">
      <div className="flex flex-col sapce-y-2 justify-start items-start mx-2 p-2 md:mr-32">
        <h3 className="text-lg font-bold my-2">{order.title}</h3>
        <span>Placement date: {order.date}</span>
        <span>Total: {order.total}</span>
        <span>Status: {order.status}</span>
      </div>
    </div>
  )
}
export default OrderCard
