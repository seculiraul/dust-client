import TextInput from '../../components/shared/TextInput'

const ProductCreation = () => {
  return (
    <div className={`max-w-2xl mx-auto bg-gray-200`}>
      <form className="flex flex-col gap-2">
        <div className="">
          <label className="mx-2 p-2">Product Name</label>
          <TextInput placeholder="Product Name" />
        </div>
      </form>
    </div>
  )
}

export default ProductCreation
