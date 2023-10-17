import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useLinks from '../../hooks/shared/useLinks.js'
import useSignOut from '../../hooks/useSignOut.js'
import ShoppingCartIcon from '../shared/ShoppingCartIcon.js'
import AuthButtons from './AuthButtons.js'
import HeaderQuickLinks from './HeaderQuickLinks.js'

const Header = () => {
  const navigate = useNavigate()
  const {
    pathnames: { cart, user: userPath, details },
  } = useLinks()
  const { logOutUser } = useSignOut()
  const { user, token, productNumber } = useSelector((state) => {
    return {
      user: state.auth?.user,
      token: state.auth?.token,
      productNumber: state.cartDetails?.items?.length,
    }
  })

  const onSingOutClick = () => {
    logOutUser()
  }

  return (
    <div className="flex flex-row w-full p-4 justify-between">
      <HeaderQuickLinks />
      <div className="flex flex-row space-x-2 justify-end items-center md:ml-4 md:p-2 md:space-x-4 duration-200">
        <ShoppingCartIcon
          onClick={() => navigate(cart)}
          productNumbers={productNumber}
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
