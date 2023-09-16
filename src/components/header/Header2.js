import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useSignOut from '../../hooks/useSignOut.js'
import useLogOut from '../../hooks/useSignOut.js'
import { useSignOutMutation } from '../../store/index.js'
import { logOut } from '../../store/slices/authSlice.js'
import AuthButtons from './AuthButtons.js'
import HeaderQuickLinks from './HeaderQuickLinks.js'

const Header2 = () => {
  const navigate = useNavigate()
  const onCartClick = () => {
    navigate('/cart')
  }

  const { logOutUser } = useSignOut()

  const currentUser = useSelector((state) => state.auth)

  const onSingOutClick = () => {
    logOutUser()
  }

  return (
    <div className="flex flex-row w-full p-4 justify-between">
      <HeaderQuickLinks />
      <div className="flex flex-row space-x-2 justify-end items-center md:ml-4 md:p-2 md:space-x-4 duration-200">
        <ShoppingBagIcon
          onClick={onCartClick}
          className="h-6 w-6 flex-shrink-0 md:mx-4 cursor-pointer"
        />
        <button
          hidden={!currentUser?.user}
          onClick={() => navigate('/user/details')}
        >
          {currentUser?.user}
        </button>
        <AuthButtons
          token={currentUser?.token}
          onSingOutClick={onSingOutClick}
        />
      </div>
    </div>
  )
}
export default Header2
