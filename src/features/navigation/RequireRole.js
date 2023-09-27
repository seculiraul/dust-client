const { useSelector } = require('react-redux')
const { Outlet, Navigate } = require('react-router')

const RequireRole = ({ role }) => {
  const { user } = useSelector((state) => state.auth)

  return user?.role?.includes(role) ? <Outlet /> : <Navigate to={'/home'} />
}

export default RequireRole
