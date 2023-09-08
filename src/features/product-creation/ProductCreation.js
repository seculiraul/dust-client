import { useState } from 'react'
import TextArea from '../../components/shared/TextArea'
import TextInput from '../../components/shared/TextInput'

const ProductCreation = () => {
  const [detail, setDetails] = useState([])

  const log = (value) => {
    const arrVal = value.split('\n')
    console.log(arrVal)
    setDetails(arrVal)
  }

  const sumbitProduct = (e) => {
    e.preventDefault()
    console.log(detail)
  }
  return (
    <div className={`w-full max-w-2xl bg-gray-200 ml-24 p-12`}>
      <form
        onSubmit={(e) => sumbitProduct(e)}
        className="flex flex-col gap-2 items-start allign-center"
      >
        <div className="w-full flex flex-col gap-2 mx-4 p-2">
          <label className="">Product Name</label>
          <TextInput extraClasses={'w-full'} placeholder="Product Name" />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Category</label>
            <TextInput placeholder="Product Name" />
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Collection Type</label>
            <TextInput placeholder="Product Name" />
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Collection Code</label>
            <TextInput placeholder="Product Name" />
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Gender</label>
            <TextInput placeholder="Product Name" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mx-4 p-2">
          <label className="">Price</label>
          <input
            type="number"
            className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            name="custom-input-number"
            value="0"
          ></input>
        </div>
        <div className="w-full h-36 flex flex-col gap-2 mx-4 p-2">
          <label className="">Images</label>
          <TextArea extraClasses={'w-full h-full'} />
        </div>
        <div className="flex flex-col gap-2 mx-4 p-2">
          <label className="">DisplayImage</label>
          <TextInput placeholder="Product Name" />
        </div>
        <div className="w-full h-36 flex flex-col gap-2 mx-4 p-2">
          <label className="">description</label>
          <TextArea extraClasses={'w-full h-full'} />
        </div>
        <div className="w-full h-36 flex flex-col gap-2 mx-4 p-2">
          <label className="">details</label>
          <TextArea onChange={log} extraClasses={'w-full h-full'} />
        </div>
        <div className="flex flex-col">
          <label className="p-2 my-4">Sizes</label>
          <div className="flex flex-row">
            <label className="p-2 mx-auto">S</label>
            <TextInput placeholder="Product Name" />
          </div>
          <div className="flex flex-row">
            <label className="p-2 mx-auto">M</label>
            <TextInput placeholder="Product Name" />
          </div>
          <div className="flex flex-row">
            <label className="p-2 mx-auto">L</label>
            <TextInput placeholder="Product Name" />
          </div>
          <div className="flex flex-row">
            <label className="p-2 mx-auto">XL</label>
            <TextInput placeholder="Product Name" />
          </div>
        </div>
        <button type="submit">sdsd</button>
      </form>
    </div>
  )
}

export default ProductCreation
