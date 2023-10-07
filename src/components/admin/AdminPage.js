import useLinks from '../../hooks/shared/useLinks'

const { default: Dashboard } = require('../user-dashboard/Dashboard')

const AdminPage = () => {
  const {
    pathnames: { newCode, creation },
  } = useLinks()
  const menuItems = {
    links: [
      {
        path: creation,
        name: 'Create New Product',
      },
      {
        path: newCode,
        name: 'Create Discount Code',
      },
      {
        path: 'editProduct',
        name: 'Edit Prodcuts',
      },
    ],
  }
  return (
    <div className="max-w-7xl px-4 sm:px06 lg:px-8">
      <Dashboard menuItems={menuItems} />
    </div>
  )
}

export default AdminPage
