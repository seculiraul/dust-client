const TextArea = ({ extraClasses, ...rest }) => {
  return (
    <textarea
      className={`p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200 ${extraClasses}`}
      {...rest}
    />
  )
}
export default TextArea
