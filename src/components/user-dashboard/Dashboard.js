import { Link, matchPath, Outlet, useLocation } from 'react-router-dom'

const Dashboard = () => {
  const path = useLocation().pathname
  const a = '2023-04-22T08:44:05.804Z'.console.log(a)
  return (
    <div>
      <div className="flex flex-row p-2 m-2 md:ml-36 justify-start items-start sapce-x-2">
        <div className="flex flex-col justify-start items-start p-2 m-2 ">
          <Link
            to="/user/details"
            className={
              path == '/user/details' ? 'border-b border-b-gray-600' : ''
            }
          >
            Account details
          </Link>
          <Link
            to="/user/orders"
            className={
              path == '/user/orders' ? 'border-b border-b-gray-600' : ''
            }
          >
            Orders
          </Link>
          <button>Logout</button>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
