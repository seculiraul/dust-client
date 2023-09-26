import { Link } from 'react-router-dom'
import useLinks from '../../hooks/shared/useLinks'

const HeaderQuickLinks = () => {
  const { pathnames, searchParams } = useLinks()

  return (
    <div className="flex flex-row space-x-2 items-center md:ml-4 md:p-2 md:space-x-4 duration-200">
      <Link
        to={pathnames.home}
        className=" m-2 text-sm font-medium hover:border-b border-gray-700 duration-100"
      >
        Home
      </Link>
      <Link
        to={pathnames.products}
        className=" m-2 text-sm font-medium hover:border-b border-gray-700 duration-100"
      >
        Products
      </Link>

      <Link
        to={{ pathname: pathnames.products, search: searchParams.men }}
        className=" m-2 text-sm hidden md:block hover:border-b font-medium border-gray-700 duration-100"
      >
        Men
      </Link>

      <Link
        to={{ pathname: pathnames.products, search: searchParams.women }}
        className=" m-2 text-sm hidden md:block hover:border-b font-medium border-gray-700 duration-100"
      >
        Women
      </Link>
      <Link
        to={'/admin/creation'}
        className=" m-2 text-sm font-medium hover:border-b border-gray-700 duration-100"
      >
        Admin Dashboard
      </Link>
    </div>
  )
}

export default HeaderQuickLinks
