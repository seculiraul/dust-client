import { Route, Routes } from 'react-router'
import CheckoutPage from './components/checkout/CheckoutPage'
import Header2 from './components/Header2'
import HomePage from './components/home/HomePage'
import NotFound from './components/not-found/NotFound'
import PrivateRoute from './components/PrivateRoute'
import ProductPage from './components/Product-list/ProductPage'
import SingleProduct from './components/Product-list/SingleProduct'
import ShoppingCartPage from './components/shopping-cart/ShoppingCartPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Test from './components/Test'
import AccountDetails from './components/user-dashboard/account-details/AccountDetails'
import Dashboard from './components/user-dashboard/Dashboard'
import Orders from './components/user-dashboard/orders/Orders'
import RequireAuth from './features/navigation/RequireAuth'
import RequireRole from './features/navigation/RequireRole'
import ProductCreation from './features/product-creation/ProductCreation'

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header2 />
      <Routes>
        {/* public routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/creation" element={<ProductCreation />} />

        {/* specific role routes */}
        <Route element={<RequireRole role={'admin'} />}></Route>

        {/* private auth routes */}
        <Route element={<RequireAuth />}>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:code" element={<SingleProduct />} />
          <Route path="/user" element={<Dashboard />}>
            <Route path="details" element={<AccountDetails />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
