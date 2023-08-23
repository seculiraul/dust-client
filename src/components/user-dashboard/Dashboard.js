import { Link, matchPath, Outlet, useLocation } from 'react-router-dom'

const Dashboard = () => {
  const path = useLocation().pathname

  const pathActive = (currentPath) => {
    return path === currentPath
      ? 'border-b border-b-gray-800 font-bold'
      : 'hover:border-b hover:border-b-gray-400'
  }
  return (
    <div>
      <div className="flex flex-row p-2 m-2 md:ml-36 md:mr-12 justify-start items-start sapce-x-2">
        <div className="flex flex-col justify-start items-start gap-2 p-2 m-2 w-1/6 rounded-md shadow-sm">
          <Link to="/user/details" className={pathActive('/user/details')}>
            Account details
          </Link>
          <Link to="/user/orders" className={pathActive('/user/orders')}>
            Orders
          </Link>
          <button className={pathActive('/logout')}>Logout</button>
        </div>
        <div className="border-l border-l-gray-300">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
