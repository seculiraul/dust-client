import { useState } from 'react'
import {
  useGetUserDetailsQuery,
  useUpdateUserDetailsMutation,
} from '../../../store/apis/userApi'
import AccountDetailsComponent from './AccountDetailsComponent'

const AccountDetails = () => {
  const [editMode, setEditMode] = useState(false)

  const { data, isSuccess } = useGetUserDetailsQuery()
  const [updateUserDetails] = useUpdateUserDetailsMutation()

  const onEditClick = () => {
    setEditMode(() => !editMode)
  }

  const onSaveClick = async (details) => {
    await updateUserDetails(details)
    setEditMode(() => !editMode)
  }

  const onCancelClick = () => {
    setEditMode(() => !editMode)
  }

  return { isSuccess } ? (
    <AccountDetailsComponent
      onEditClick={onEditClick}
      onSaveClick={onSaveClick}
      onCancelClick={onCancelClick}
      details={data?.data}
      editMode={editMode}
    />
  ) : (
    <>Loading</>
  )
}
export default AccountDetails
