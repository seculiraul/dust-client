import { useState } from 'react'
import { useGetUserDetailsQuery } from '../../../store/apis/userApi'

const AccountDetails = () => {
  const [editMode, setEditMode] = useState(false)

  const { data, isSuccess } = useGetUserDetailsQuery()

  const [firstName, setFirstName] = useState(data?.data?.firstName)
  const [lastName, setLastName] = useState(data?.data?.lastName)
  const [address, setAddress] = useState(data?.data?.address)
  const [city, setCity] = useState(data?.data?.city)
  const [region, setRegion] = useState(data?.data?.region)
  const [email, setEmail] = useState(data?.data?.email)
  const [phone, setPhone] = useState(data?.data?.phone)

  const onEditClick = () => {
    setEditMode(() => !editMode)
  }

  const onSaveClick = () => {
    // SEND EDIT REQUEST TO UPDATE USER DATA
    setEditMode(() => !editMode)
  }

  const onCancelClick = () => {
    // HERE WILL RESTORE ALL FIELDS AS INITAL DATA
    setEditMode(() => !editMode)
  }

  const inputClass = (input = 'normal') => {
    return input !== 'alwaysDisabled'
      ? `w-26 p-2 border-2 border-slate-300 rounded-md ${
          editMode
            ? 'focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-500'
            : 'bg-slate-300 cursor-not-allowed duration-500'
        }`
      : 'w-26 p-2 border-2 border-slate-300 rounded-md bg-slate-300 cursor-not-allowed duration-500'
  }

  const renderButtons = () => {
    if (editMode) {
      return (
        <div className="flex flex-row gap-1 justify-start">
          <button
            onClick={onSaveClick}
            className="p-2 px-4 m-2 rounded bg-blue-500 text-white hover:bg-blue-600 duration-200"
          >
            Save
          </button>
          <button
            onClick={onCancelClick}
            className="p-2 px-4 m-2 rounded bg-gray-100 text-slate-800 hover:bg-gray-300 duration-200"
          >
            Cancel
          </button>
        </div>
      )
    }
    return (
      <div className="flex flex-row gap-1 justify-end">
        <button
          onClick={onEditClick}
          className="p-2 px-4 m-2 rounded bg-blue-500 text-white hover:bg-blue-600 duration-200"
        >
          Edit
        </button>
      </div>
    )
  }

  return { isSuccess } ? (
    <div>
      <div className="w-full flex shrink flex-col space-y-2 m-2 p-2">
        <div className=" w-full flex flex-row items-stretch justify-between space-x-2">
          <div className="text-left">
            <label className="block mb-2">First Name</label>
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              disabled={!editMode}
              className={inputClass()}
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="text-left">
            <label className="block mb-2">Last Name</label>
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              disabled={!editMode}
              className={inputClass()}
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className=" w-full flex flex-col items-start">
          <label className="block mb-2">Address</label>
          <input
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            disabled={!editMode}
            className={`${inputClass()} w-full`}
            type="text"
            placeholder="Address"
          />
        </div>
        <div className=" w-full flex flex-row items-stretch justify-between space-x-2">
          <div className="text-left">
            <label className="block mb-2">City</label>
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              disabled={!editMode}
              className={inputClass()}
              type="text"
              placeholder="City"
            />
          </div>
          <div className="text-left">
            <label className="block mb-2">Region</label>
            <input
              value={region}
              onChange={(event) => setRegion(event.target.value)}
              disabled={!editMode}
              className={inputClass()}
              type="text"
              placeholder="Region"
            />
          </div>
        </div>
        <div className=" w-full flex flex-row items-stretch justify-between space-x-2">
          <div className="text-left">
            <label className="block mb-2">Email</label>
            <input
              disabled
              className={inputClass('alwaysDisabled')}
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="text-left">
            <label className="block mb-2">Phone</label>
            <input
              disabled
              className={inputClass('alwaysDisabled')}
              type="text"
              placeholder="Phone"
            />
          </div>
        </div>
      </div>
      {renderButtons()}
    </div>
  ) : (
    <>Loading</>
  )
}
export default AccountDetails
