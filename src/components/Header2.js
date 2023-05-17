import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { connect, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useSignInMutation } from '../store'
import Sort from './shared/Sort'
import Test from './Test'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header2 = () => {
  const navigate = useNavigate()
  const onCartClick = () => {
    navigate('/cart')
  }

  const currentUser = useSelector((state) => state.auth)
  const sortOptions = [
    { name: 'My Profile', href: '#', current: true },
    { name: 'My Orders', href: '#', current: false },
    { name: 'Logout', href: '#', current: false },
  ]

  const renderSignInButtons = currentUser.token ? (
    <div className="flex flex-row space-x-2">
      <Sort
        className={'text-black'}
        classNames={classNames}
        sortOptions={sortOptions}
      />
      <Link
        to={'/home'}
        className="hidden md:block m-2 text-sm p-2 px-4 bg-gray-200 text-black rounded hover:bg-gray-400 duration-200"
      >
        Sign out
      </Link>
    </div>
  ) : (
    <>
      <Link
        to={'/signin'}
        className=" m-2 text-sm p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 duration-200"
      >
        Sign in
      </Link>
      <Link
        to={'/signup'}
        className="m-2 text-sm p-2 px-4 bg-gray-200 text-black rounded hover:bg-gray-400 duration-200"
      >
        Sign up
      </Link>
    </>
  )

  return (
    <div className="flex flex-row w-full p-4 justify-between ">
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
      </div>
      <div className="flex flex-row space-x-2 justify-end items-center md:ml-4 md:p-2 md:space-x-4 duration-200">
        <ShoppingBagIcon
          onClick={onCartClick}
          className="h-6 w-6 flex-shrink-0 md:mx-4 cursor-pointer"
        />
        <button onClick={() => console.log(currentUser)}>sddsa</button>
        {renderSignInButtons}
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return { currentUser: state.currentUser }
// }

//export default connect(mapStateToProps, {})(Header2)

export default Header2
