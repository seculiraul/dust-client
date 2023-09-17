const PrimaryButton = ({ children, extraClasses, ...rest }) => {
  return (
    <button
      {...rest}
      className={`py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 duration-300 ${extraClasses}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
