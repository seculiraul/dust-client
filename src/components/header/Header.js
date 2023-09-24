import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useLinks from '../../hooks/shared/useLinks.js'
import useSignOut from '../../hooks/useSignOut.js'
import AuthButtons from './AuthButtons.js'
import HeaderQuickLinks from './HeaderQuickLinks.js'

const Header = () => {
  const navigate = useNavigate()
  const {
    pathnames: { cart, user: userPath, details },
  } = useLinks()
  const { logOutUser } = useSignOut()
  const { user, token } = useSelector((state) => state.auth)

  const onSingOutClick = () => {
    logOutUser()
  }

  return (
    <div className="flex flex-row w-full p-4 justify-between">
      <HeaderQuickLinks />
      <div className="flex flex-row space-x-2 justify-end items-center md:ml-4 md:p-2 md:space-x-4 duration-200">
        <ShoppingBagIcon
          onClick={() => navigate(cart)}
          className="h-6 w-6 flex-shrink-0 md:mx-4 cursor-pointer"
        />
        <Link to={`${userPath}/${details}`} hidden={!user?.name}>
          {user?.name}
        </Link>
        <AuthButtons token={token} onSingOutClick={onSingOutClick} />
      </div>
    </div>
  )
}
export default Header
