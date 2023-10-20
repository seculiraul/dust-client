import { Navigate, Outlet } from 'react-router'

const RequireCondition = ({ condition, navigationPath }) => {
  return condition ? <Outlet /> : <Navigate to={navigationPath} />
}

export default RequireCondition
