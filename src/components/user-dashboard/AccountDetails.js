const AccountDetails = () => {
  return (
    <div className="w-full flex shrink flex-col space-y-2 m-2 p-2">
      <div className=" w-full flex flex-row items-stretch justify-between space-x-2">
        <div className="text-left">
          <label className="block mb-2">First Name</label>
          <input
            className="w-26 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="text-left">
          <label className="block mb-2">Last Name</label>
          <input
            className="w-26 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className=" w-full flex flex-col items-start">
        <label className="block mb-2">Address</label>
        <input
          className="w-full p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
          type="text"
          placeholder="Address"
        />
      </div>
      <div className=" w-full flex flex-row items-stretch justify-between space-x-2">
        <div className="text-left">
          <label className="block mb-2">City</label>
          <input
            className="w-26 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
            type="text"
            placeholder="City"
          />
        </div>
        <div className="text-left">
          <label className="block mb-2">Region</label>
          <input
            className="w-26 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
            type="text"
            placeholder="Region"
          />
        </div>
      </div>
      <div className=" w-full flex flex-row items-stretch justify-between space-x-2">
        <div className="text-left">
          <label className="block mb-2">Email</label>
          <input
            className="w-26 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="text-left">
          <label className="block mb-2">Phone</label>
          <input
            className="w-26 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
            type="text"
            placeholder="Phone"
          />
        </div>
      </div>
    </div>
  )
}
export default AccountDetails
