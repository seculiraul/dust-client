import { logOut } from '../store/slices/authSlice'
import useLinks from './shared/useLinks'

const { useDispatch } = require('react-redux')
const { useNavigate } = require('react-router')
const { useSignOutMutation } = require('../store')

const useSignOut = () => {
  const [signOut] = useSignOutMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    pathnames: { home },
  } = useLinks()

  const logOutUser = async () => {
    await signOut()
    dispatch(logOut())
    navigate(home)
  }

  return { logOutUser }
}

export default useSignOut
