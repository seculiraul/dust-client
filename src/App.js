import { Route, Routes } from 'react-router'
import CheckoutPage from './components/checkout/CheckoutPage'
import Header from './components/header/Header'
import HomePage from './components/home/HomePage'
import NotFound from './components/not-found/NotFound'
import ProductPage from './components/Product-list/ProductPage'
import SingleProduct from './components/Product-list/SingleProduct'
import ShoppingCartPage from './components/shopping-cart/ShoppingCartPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import AccountDetails from './components/user-dashboard/account-details/AccountDetails'
import Dashboard from './components/user-dashboard/Dashboard'
import Orders from './components/user-dashboard/orders/Orders'
import RequireAuth from './features/navigation/RequireAuth'
import RequireRole from './features/navigation/RequireRole'
import ProductCreation from './features/product-creation/ProductCreation'
import ProductMain from './features/productPage/productMain'

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Routes>
        {/* public routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/products" element={<ProductMain />} />
        <Route path="/products/:code" element={<SingleProduct />} />
        <Route path="/creation" element={<ProductCreation />} />

        {/* specific role routes */}
        <Route element={<RequireRole role={'admin'} />}></Route>

        {/* private auth routes */}
        <Route element={<RequireAuth />}>
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
