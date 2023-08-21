import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const CheckoutForm = ({ totalCart, onSubmit, onDeliveryChange }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [region, setRegion] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [payMethod, setPaymethod] = useState('')
  const [deliveryOption, setDeliveryOption] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const info = {
      deliveryDetails: {
        firstName,
        lastName,
        address,
        city,
        region,
        phone,
        email,
      },
      payMethod,
      deliveryOption,
    }
    onSubmit(info)

    setFirstName('')
    setLastName('')
    setAddress('')
    setCity('')
    setRegion('')
    setPhone('')
    setEmail('')
    setPaymethod('card')
    setDeliveryOption('fastCourier')
  }

  const handleOnDeliveryChange = (option) => {
    setDeliveryOption(option)
    onDeliveryChange(option)
  }

  return (
    <div className="max-w-[1500px] w-full mx-auto text-center m-5 p-10">
      <div className="flex flex-col w-full p-4  items-start justify-items-center  border border-gray-200 space-y-2 md:items-center md:flex-row md:space-y-0 md:space=x=4 md:items-start">
        <div className="h-42 w-full md:w-2/3">
          <form className="border-b-2 md:border-b-0 md:border-r-2 border-gray-200 w-full">
            <div className="flex flex-col p-4 m-2 w-full items-stretch justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-2">
              <div className="w-11/12 text-left">
                <label className="block mb-2">First Name</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-11/12 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
                  type="text"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="w-11/12 text-left">
                <label className="block mb-2">Last Name</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-11/12 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
                  type="text"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col p-4 m-2 items-stretch justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-2">
              <div className="w-full text-left">
                <label className="block mb-2">Address</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
                  type="text"
                  placeholder="Enter Address"
                />
              </div>
            </div>
            <div className="flex flex-col p-4 m-2 items-stretch justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-2">
              <div className="w-11/12 text-left">
                <label className="block mb-2">City</label>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-11/12 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
                  type="text"
                  placeholder="Enter City"
                />
              </div>
              <div className="w-11/12 text-left">
                <label className="block mb-2">Region</label>
                <input
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-11/12 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
                  type="text"
                  placeholder="Enter Region"
                />
              </div>
            </div>
            <div className="flex flex-col p-4 m-2 items-stretch justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-2">
              <div className="w-11/12 text-left">
                <label className="block mb-2">Phone Number</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-11/12 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
                  type="text"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="w-11/12 text-left">
                <label className="block mb-2">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-11/12 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
                  type="text"
                  placeholder="Enter Email"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col h-42 p-2 space-y-2 md:w-1/3">
          <div className="m-2 p-2 border-b-0 w-full">
            <form>
              <div className="flex flex-col m-2 p-2 pb-6 border-b-2 border-slate-700 md:ml-7 space-y-3 items-start">
                <h2 className="text-lg font-bold">Select payment method</h2>
                <div>
                  <input
                    type="radio"
                    onChange={(e) => setPaymethod(e.target.value)}
                    id="payCard"
                    name="pay"
                    value="card"
                    checked={payMethod === 'card'}
                  />
                  <label className="ml-2 font-medium">Pay via card</label>
                </div>
                <div>
                  <input
                    type="radio"
                    onChange={(e) => setPaymethod(e.target.value)}
                    id="payPaypal"
                    name="pay"
                    value={'paypal'}
                    checked={payMethod === 'paypal'}
                  />
                  <label className="ml-2 font-medium">Pay via Paypal</label>
                </div>

                <div>
                  <input
                    type="radio"
                    onChange={(e) => setPaymethod(e.target.value)}
                    id="payDelivery"
                    name="pay"
                    value="delivery"
                    checked={payMethod === 'delivery'}
                  />
                  <label className="ml-2 font-medium">Pay at delivery</label>
                </div>
                <br />
              </div>

              <div className="flex flex-col m-2 p-2 mt-4 md:ml-7 space-y-3 items-start">
                <h2 className="text-lg font-bold">Select delivery method</h2>
                <div>
                  <input
                    onChange={(e) => handleOnDeliveryChange(e.target.value)}
                    type="radio"
                    id="fastCourier"
                    name="delivery"
                    value="fastCourier"
                    checked={deliveryOption === 'fastCourier'}
                  />
                  <label className="ml-2 font-medium">Fast Courier</label>
                </div>
                <div>
                  <input
                    onChange={(e) => handleOnDeliveryChange(e.target.value)}
                    type="radio"
                    id="courier"
                    name="delivery"
                    value="standardCourier"
                    checked={deliveryOption === 'standardCourier'}
                  />
                  <label className="ml-2 font-medium">Standard Courier</label>
                </div>

                <div>
                  <input
                    onChange={(e) => handleOnDeliveryChange(e.target.value)}
                    type="radio"
                    id="post"
                    name="delivery"
                    value="post"
                    checked={deliveryOption === 'post'}
                  />
                  <label className="ml-2 font-medium">Deliver by Post</label>
                </div>
              </div>
              <div className="p-2 m-4 text-lg">
                <h2 className="text-lg font-medium">
                  Total:{' '}
                  <span className="ml-2 text-2xl font-bold">{`${totalCart} $`}</span>
                </h2>
              </div>
              <button
                onClick={handleOnSubmit}
                disabled={payMethod === '' && deliveryOption === ''}
                className={classNames(
                  payMethod !== '' && deliveryOption !== ''
                    ? 'w-full mt-2 p-2 bg-blue-600 rounded-md text-white hover:bg-blue-800 hover:scale-110 duration-200'
                    : 'w-full mt-2 p-2 bg-blue-200 rounded-md text-white cursor-not-allowed'
                )}
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm
