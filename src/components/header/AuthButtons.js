import { Link } from 'react-router-dom'

const AuthButtons = ({ token, onSingOutClick }) => {
  const handleSingOutClick = () => {
    onSingOutClick()
  }
  return token ? (
    <div className="flex flex-row space-x-2">
      <button
        onClick={() => handleSingOutClick()}
        className="hidden md:block m-2 text-sm p-2 px-4 bg-gray-200 text-black rounded hover:bg-gray-400 duration-200"
      >
        Sign out
      </button>
    </div>
  ) : (
    <>
      <Link
        to={'/signin'}
        className="m-2 text-sm p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 duration-200"
      >
        Sign in
      </Link>
      <Link
        to={'/signup'}
        className="m-2 text-sm p-2 px-4 bg-gray-200 text-black rounded hover:bg-gray-400 duration-200"
      >
        Sign up
      </Link>
    </>
  )
}

export default AuthButtons
