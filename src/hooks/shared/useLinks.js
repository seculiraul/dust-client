const useLinks = () => {
  const pathnames = {
    home: '/home',
    products: '/products',
    singleProduct: '/products/:code',
    creation: '/creation',
    signIn: '/signIn',
    signUp: 'signUp',
    cart: '/cart',
    checkout: '/checkout',
    user: '/user',
    details: 'details',
    orders: 'orders',
    notFound: '*',
  }

  const searchParams = {
    men: 'gender=Men',
    women: 'gender=Women',
  }

  return { pathnames, searchParams }
}

export default useLinks
