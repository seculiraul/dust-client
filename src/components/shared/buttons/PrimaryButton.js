const PrimaryButton = ({ children, extraClasses, disabled, ...rest }) => {
  const disabledClasses = disabled
    ? 'cursor-not-allowed bg-blue-300 hover:bg-blue-300'
    : ''
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 duration-300 ${extraClasses} ${disabledClasses}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
