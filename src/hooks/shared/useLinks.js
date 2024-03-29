const useLinks = () => {
  const pathnames = {
    home: '/home',
    products: '/products',
    singleProduct: '/products/:code',
    admin: 'admin',
    creation: 'creation',
    newCode: 'new-code',
    signIn: '/signIn',
    signUp: '/signup',
    cart: '/cart',
    checkout: '/checkout',
    user: '/user',
    details: 'details',
    orders: 'orders',
    productEditor: '/edit',
    notFound: '*',
  }

  const searchParams = {
    men: 'gender=Men',
    women: 'gender=Women',
  }

  return { pathnames, searchParams }
}

export default useLinks
