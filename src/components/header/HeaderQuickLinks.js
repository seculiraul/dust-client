import { Link } from 'react-router-dom'

const HeaderQuickLinks = () => {
  return (
    <div className="flex flex-row space-x-2 items-center md:ml-4 md:p-2 md:space-x-4 duration-200">
      <Link
        to={'/home'}
        className=" m-2 text-sm font-medium hover:border-b border-gray-700 duration-100"
      >
        Home
      </Link>
      <Link
        to={'/products'}
        className=" m-2 text-sm font-medium hover:border-b border-gray-700 duration-100"
      >
        Products
      </Link>

      <button className=" m-2 text-sm hidden md:block hover:border-b font-medium border-gray-700 duration-100">
        Men
      </button>

      <button className=" m-2 text-sm hidden md:block hover:border-b font-medium border-gray-700 duration-100">
        Women
      </button>
      <Link
        to={'/creation'}
        className=" m-2 text-sm font-medium hover:border-b border-gray-700 duration-100"
      >
        New Product
      </Link>
    </div>
  )
}

export default HeaderQuickLinks
