import { Link, matchPath, Outlet, useLocation } from 'react-router-dom'

const Dashboard = ({ menuItems }) => {
  const path = useLocation().pathname

  const pathActive = (currentPath) => {
    return path === currentPath
      ? 'border-b border-b-gray-800 font-bold'
      : 'hover:border-b hover:border-b-gray-400'
  }

  const renderItems = menuItems?.links?.map((link, index) => {
    return (
      <Link key={index} to={link.path} className={pathActive(link.path)}>
        {link.name}
      </Link>
    )
  })

  const renderActions = menuItems?.actions?.map((action, index) => {
    return (
      <button key={index} onClick={action.click}>
        {action.name}
      </button>
    )
  })
  return (
    <div>
      <div className="flex flex-row p-2 m-2 md:ml-36 md:mr-12 justify-start items-start sapce-x-2">
        <div className="flex flex-col justify-start items-start gap-2 p-2 m-2 w-1/6 rounded-md shadow-sm">
          {renderItems}
          {renderActions}
        </div>
        <div className="border-l border-l-gray-300">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
