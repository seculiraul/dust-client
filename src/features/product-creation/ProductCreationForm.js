import { useState } from 'react'
import TextArea from '../../components/shared/TextArea'
import TextInput from '../../components/shared/TextInput'

const ProductCreationForm = ({ submitNewProduct }) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [collectionType, setCollectionType] = useState('')
  const [collectionCode, setCollectionCode] = useState('')
  const [gender, setGender] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [brand, setBrand] = useState('')
  const [images, setImages] = useState([])
  const [displayImage, setDisplayImage] = useState('')
  const [description, setDescription] = useState('')
  const [details, setDetails] = useState('')
  const [specs, setSpecs] = useState([])
  const [sizes, setSizes] = useState({ S: 0, M: 0, L: 0, XL: 0 })

  const updateSizes = (value, wantedSize) => {
    setSizes((sizes) => {
      return {
        ...sizes,
        [wantedSize]: value,
      }
    })
  }
  const sumbitProduct = (e) => {
    e.preventDefault()

    const { S, M, L, XL } = sizes
    const newProduct = {
      name,
      category,
      collectionCode,
      collectionType,
      gender,
      color,
      price: +price,
      brand,
      images: images.split('\n'),
      displayImage,
      description,
      details,
      specs: images.split('\n'),
      sizes: { S, M, L, XL },
    }

    submitNewProduct(newProduct)
  }
  return (
    <div className={`w-full max-w-2xl bg-gray-200 ml-24 p-12`}>
      <form
        onSubmit={(e) => sumbitProduct(e)}
        className="flex flex-col gap-2 items-start allign-center"
      >
        <div className="w-full flex flex-col gap-2 mx-4 p-2">
          <label className="">Product Name</label>
          <TextInput
            id={'name-input'}
            extraClasses={'w-full'}
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Category</label>
            <TextInput
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Collection Type</label>
            <TextInput
              placeholder="Collection Type"
              value={collectionType}
              onChange={(e) => setCollectionType(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Collection Code</label>
            <TextInput
              placeholder="Collection Code"
              value={collectionCode}
              onChange={(e) => setCollectionCode(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Gender</label>
            <TextInput
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Colour</label>
            <TextInput
              placeholder="Colour"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mx-4 p-2">
          <label className="">Brand</label>
          <TextInput
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="w-full h-36 flex flex-col gap-2 mx-4 p-2">
          <label className="">Images</label>
          <TextArea
            extraClasses={'w-full h-full'}
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mx-4 p-2">
          <label className="">DisplayImage</label>
          <TextInput
            placeholder="DisplayImage"
            value={displayImage}
            onChange={(e) => setDisplayImage(e.target.value)}
          />
        </div>
        <div className="w-full h-36 flex flex-col gap-2 mx-4 p-2">
          <label className="">Description</label>
          <TextArea
            extraClasses={'w-full h-full'}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="w-full h-36 flex flex-col gap-2 mx-4 p-2">
          <label className="">Details</label>
          <TextArea
            extraClasses={'w-full h-full'}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <div className="w-full h-36 flex flex-col gap-2 mx-4 p-2">
          <label className="">Specs</label>
          <TextArea
            extraClasses={'w-full h-full'}
            value={specs}
            onChange={(e) => setSpecs(e.target.value)}
          />
        </div>
        <div className="">
          <label className="p-2 my-4">Sizes</label>
          <div className="grid grid-cols-2">
            <div className="flex flex-row">
              <label className="p-2 mx-auto">S</label>
              <TextInput
                placeholder="Enter Numer"
                value={sizes.S}
                onChange={(e) => updateSizes(e.target.value, 'S')}
              />
            </div>
            <div className="flex flex-row">
              <label className="p-2 mx-auto">M</label>
              <TextInput
                placeholder="Enter Numer"
                value={sizes.M}
                onChange={(e) => updateSizes(e.target.value, 'M')}
              />
            </div>
            <div className="flex flex-row">
              <label className="p-2 mx-auto">L</label>
              <TextInput
                placeholder="Enter Numer"
                value={sizes.L}
                onChange={(e) => updateSizes(e.target.value, 'L')}
              />
            </div>
            <div className="flex flex-row">
              <label className="p-2 mx-auto">XL</label>
              <TextInput
                placeholder="Enter Numer"
                value={sizes.XL}
                onChange={(e) => updateSizes(e.target.value, 'XL')}
              />
            </div>
          </div>
        </div>
        <button
          className="mx-2 my-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-300"
          type="submit"
        >
          Create Product
        </button>
      </form>
    </div>
  )
}

export default ProductCreationForm
