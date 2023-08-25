import { Route, Routes } from 'react-router'
import CheckoutPage from './components/checkout/CheckoutPage'
import Header2 from './components/Header2'
import ProductPage from './components/Product-list/ProductPage'
import SingleProduct from './components/Product-list/SingleProduct'
import ShoppingCartPage from './components/shopping-cart/ShoppingCartPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Test from './components/Test'
import AccountDetails from './components/user-dashboard/account-details/AccountDetails'
import Dashboard from './components/user-dashboard/Dashboard'
import Orders from './components/user-dashboard/orders/Orders'

const App = () => {
  return (
    <div className="">
      <Header2 />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:code" element={<SingleProduct />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/user" element={<Dashboard />}>
          <Route path="details" element={<AccountDetails />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
