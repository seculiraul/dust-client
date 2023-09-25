import useLinks from '../../hooks/shared/useLinks'
import useSignOut from '../../hooks/useSignOut'

const UserDetails = () => {
  const {
    pathnames: { details, orders },
  } = useLinks()

  const { default: Dashboard } = require('./Dashboard')
  const { logOutUser } = useSignOut()

  const menuItems = {
    links: [
      {
        path: details,
        name: 'Account Details',
      },
      {
        path: orders,
        name: 'Orders',
      },
    ],
    actions: [
      {
        name: 'LogOut',
        click: () => logOutUser(),
      },
    ],
  }

  return (
    <div className="max-w-7xl px-4 sm:px06 lg:px-8 ">
      <Dashboard menuItems={menuItems} />
    </div>
  )
}

export default UserDetails
