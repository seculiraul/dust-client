import { useState } from 'react'
import PrimaryButton from '../../../components/shared/buttons/PrimaryButton'
import TextArea from '../../../components/shared/TextArea'
import TextInput from '../../../components/shared/TextInput'

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
  const [quantityS, setQuantityS] = useState('')
  const [quantityM, setQuantityM] = useState('')
  const [quantityL, setQuantityL] = useState('')
  const [quantityXL, setQuantityXL] = useState('')

  const sumbitProduct = (e) => {
    e.preventDefault()

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
      sizes: [
        { size: 'S', quantity: +quantityS },
        { size: 'M', quantity: +quantityM },
        { size: 'L', quantity: +quantityL },
        { size: 'XL', quantity: +quantityXL },
      ],
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
                value={quantityS}
                onChange={(e) => setQuantityS(e.target.value)}
              />
            </div>
            <div className="flex flex-row">
              <label className="p-2 mx-auto">M</label>
              <TextInput
                placeholder="Enter Numer"
                value={quantityM}
                onChange={(e) => setQuantityM(e.target.value)}
              />
            </div>
            <div className="flex flex-row">
              <label className="p-2 mx-auto">L</label>
              <TextInput
                placeholder="Enter Numer"
                value={quantityL}
                onChange={(e) => setQuantityL(e.target.value)}
              />
            </div>
            <div className="flex flex-row">
              <label className="p-2 mx-auto">XL</label>
              <TextInput
                placeholder="Enter Numer"
                value={quantityXL}
                onChange={(e) => setQuantityXL(e.target.value)}
              />
            </div>
          </div>
        </div>
        <PrimaryButton extraClasses={'mx-2 my-4'} type={'sumbit'}>
          Create Product
        </PrimaryButton>
      </form>
    </div>
  )
}

export default ProductCreationForm
