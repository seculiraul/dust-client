import { useState } from 'react'

const AccountDetails = () => {
  const [editMode, setEditMode] = useState(false)

  const onEditClick = () => {
    setEditMode(() => !editMode)
  }

  return (
    <div>
      <div className="w-full flex shrink flex-col space-y-2 m-2 p-2">
        <div className=" w-full flex flex-row items-stretch justify-between space-x-2">
          <div className="text-left">
            <label className="block mb-2">First Name</label>
            <input
              disabled={!editMode}
              className="w-26 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="text-left">
            <label className="block mb-2">Last Name</label>
            <input
              disabled={!editMode}
              className="w-26 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className=" w-full flex flex-col items-start">
          <label className="block mb-2">Address</label>
          <input
            disabled={!editMode}
            className="w-full p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
            type="text"
            placeholder="Address"
          />
        </div>
        <div className=" w-full flex flex-row items-stretch justify-between space-x-2">
          <div className="text-left">
            <label className="block mb-2">City</label>
            <input
              disabled={!editMode}
              className="w-26 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
              type="text"
              placeholder="City"
            />
          </div>
          <div className="text-left">
            <label className="block mb-2">Region</label>
            <input
              disabled={!editMode}
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
              disabled={!editMode}
              className="w-26 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="text-left">
            <label className="block mb-2">Phone</label>
            <input
              disabled={!editMode}
              className="w-26 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200"
              type="text"
              placeholder="Phone"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-1 justify-end">
        <button
          onClick={onEditClick}
          className="p-2 px-4 m-2 rounded bg-blue-500 text-white hover:bg-blue-700 duration-200"
        >
          Edit
        </button>
      </div>
    </div>
  )
}
export default AccountDetails
