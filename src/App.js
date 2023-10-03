import { Route, Routes } from 'react-router'
import AdminPage from './components/admin/AdminPage'
import CheckoutPage from './components/checkout/CheckoutPage'
import Header from './components/header/Header'
import HomePage from './components/home/HomePage'
import NotFound from './components/not-found/NotFound'
import SingleProduct from './components/Product-list/SingleProduct'
import ShoppingCartPage from './components/shopping-cart/ShoppingCartPage'
import SignIn from './components/SignIn'
import SignUp from './features/auth/signUp/SignUp'
import AccountDetails from './components/user-dashboard/account-details/AccountDetails'
import Orders from './components/user-dashboard/orders/Orders'
import UserDetails from './components/user-dashboard/UserDetails'
import CodeCreation from './features/adminFeatures/createCode/CodeCreation'
import ProductCreation from './features/adminFeatures/product-creation/ProductCreation'
import RequireAuth from './features/navigation/RequireAuth'
import RequireRole from './features/navigation/RequireRole'
import ProductsMain from './features/productPage/ProductsMain'
import useLinks from './hooks/shared/useLinks'

const App = () => {
  const { pathnames } = useLinks()
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Routes>
        {/* public routes */}
        <Route path={pathnames.home} element={<HomePage />} />
        <Route path={pathnames.signIn} element={<SignIn />} />
        <Route path={pathnames.signUp} element={<SignUp />} />
        <Route path={pathnames.cart} element={<ShoppingCartPage />} />
        <Route path={pathnames.checkout} element={<CheckoutPage />} />
        <Route path={pathnames.products} element={<ProductsMain />} />
        <Route path={pathnames.singleProduct} element={<SingleProduct />} />

        {/* specific role routes */}
        <Route element={<RequireRole role={'user'} />}>
          <Route path={pathnames.admin} element={<AdminPage />}>
            <Route path={pathnames.creation} element={<ProductCreation />} />
            <Route path={pathnames.newCode} element={<CodeCreation />} />
          </Route>
        </Route>

        {/* private auth routes */}
        <Route element={<RequireAuth />}>
          <Route path={pathnames.user} element={<UserDetails />}>
            <Route path={pathnames.details} element={<AccountDetails />} />
            <Route path={pathnames.orders} element={<Orders />} />
          </Route>
        </Route>

        <Route path={pathnames.notFound} element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
