const { useSelector } = require('react-redux')
const { Outlet, Navigate } = require('react-router')

const RequireAuth = () => {
  const { user } = useSelector((state) => state.auth)

  return user ? <Outlet /> : <Navigate to={'/home'} />
}

export default RequireAuth
