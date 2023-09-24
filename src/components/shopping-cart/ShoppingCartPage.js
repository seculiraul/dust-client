import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import useLinks from '../../hooks/shared/useLinks'
import { editCartItem, removeCartItem } from '../../store/slices/cartSlice'

const ShoppingCartPage = () => {
  const dispatch = useDispatch()

  const cartDetails = useSelector((state) => state.cartDetails)
  const { items, totalCart: total } = cartDetails

  const navigate = useNavigate()
  const {
    pathnames: { checkout, products },
  } = useLinks()

  const onQuantityChange = (product, quantity) => {
    dispatch(editCartItem({ product, quantity: +quantity }))
  }

  const deleteProductFromCart = (item) => {
    dispatch(removeCartItem(item))
  }

  const onCheckoutClick = () => {
    navigate(checkout, { state: { total } })
  }
  return (
    <div className="mx-16 text-center mb-40 px-2 pt-16">
      {/* Container for the two sides */}
      <div className="flex  flex-col items-center justify-center space-y-5 p-4 m-2 border-y-2 md:flex-row md:items-start md:justify-center md:space-y-0 md:space-x-5">
        {/** Left side container that holds the cart items pils */}
        <table className="scale-[90%] mx-2 border-separate p-2 border-spacing-2 bg-white text-sm rounded-lg shadow-sm md:scale-100 md:w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="border w-2/12 border-slate-300 font-semibold py-4 px-2 text-slate-900 rounded-lg text-left">
                Image
              </th>
              <th className="border border-slate-300 font-semibold py-4 px-2 text-slate-900 rounded-lg text-left">
                Product
              </th>
              <th className="border border-slate-300 font-semibold py-4 px-2 text-slate-900 rounded-lg text-left">
                Size
              </th>
              <th className="border border-slate-300 font-semibold py-4 px-2 text-slate-900 rounded-lg text-left">
                Quantity
              </th>
              <th className="border border-slate-300 font-semibold py-4 px-2 text-slate-900 rounded-lg text-left">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.nameAndSize} className="font-serif">
                  <td className="border border-slate-300 rounded-lg text-slate-500">
                    <img
                      onClick={(e) => navigate(`${products}/${item.code}`)}
                      className="w-28 h-28 mx-auto cursor-pointer scale-75 md:scale-100"
                      src={item.displayImage}
                    />
                  </td>
                  <td className="border border-slate-300 py-4 px-2 rounded-lg text-slate-500">
                    {item.name}
                  </td>
                  <td className="border border-slate-300 py-4 px-2 rounded-lg text-slate-500">
                    {item.size}
                  </td>
                  <td className="border border-slate-300 py-4 px-2 rounded-lg text-slate-500">
                    <input
                      className="w-10"
                      type="number"
                      onChange={(e) => onQuantityChange(item, e.target.value)}
                      defaultValue={item.quantity}
                      min={1}
                    />
                  </td>
                  <td className="border border-slate-300 py-4 px-2 rounded-lg text-slate-500">
                    <div className="flex flex-col space-y-2">
                      {item.totalPrice}
                      <span
                        onClick={() => deleteProductFromCart(item)}
                        className="cursor-pointer hover:text-blue-700 hover:underline hover:underline-offset-0"
                      >
                        Delete
                      </span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="flex flex-col p-2 justify-between border border-slate-400 text-sm rounded-lg shadow-sm">
          <div className="flex m-2 items-center justify-center">
            <input
              className="p-2 m-2 border boder-gray-200"
              type="text"
              placeholder="Enter Code Here"
            />
            <button className="p-2 px-4 text-white bg-gray-600 hover:bg-gray-400 duration-200">
              Apply
            </button>
          </div>
          <div className="flex mx-2 justify-between items-center">
            <h3 className="p-2">Total</h3>
            <h1 className="font-sherif m-2 p-6 font-bold text-2xl">{total}$</h1>
          </div>
          <button
            onClick={() => onCheckoutClick()}
            className="text-sherif p-2 bg-blue-600 text-white hover:bg-blue-400 duration-200"
          >
            To Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartPage
