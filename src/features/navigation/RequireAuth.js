import Cookies from 'js-cookie'

const { useSelector } = require('react-redux')
const { Outlet, Navigate } = require('react-router')

const RequireAuth = () => {
  const { user } = useSelector((state) => state.auth)

  const cookie = Cookies.get('jwt')
  console.log(cookie)

  return cookie ? <Outlet /> : <Navigate to={'/home'} />
}

export default RequireAuth
