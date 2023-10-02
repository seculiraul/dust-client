const PrimaryButton = ({ children, extraClasses, disabled, ...rest }) => {
  const disabledClasses = disabled
    ? 'cursor-not-allowed bg-blue-300'
    : ' bg-blue-500 hover:bg-blue-600'
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`py-2 px-4 text-white rounded duration-300 ${disabledClasses} ${extraClasses}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
