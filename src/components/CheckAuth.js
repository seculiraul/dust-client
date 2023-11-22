import { Outlet } from 'react-router'
import { useRefreshQuery } from '../store'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../store/slices/authSlice'
import { useEffect, useState } from 'react'

const CheckAuth = () => {
  const { data, isSuccess } = useRefreshQuery()
  const [success, setSuccess] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (success && isSuccess && data) {
      console.log('hello')
      console.log(data)
      dispatch(setCredentials({ ...data }))
    }
    return () => setSuccess(true)
  }, [data])

  return <Outlet />
}

export default CheckAuth
