import { useEffect, useState } from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import TextArea from '../TextArea'
import TextInput from '../TextInput'

const DetaildProductForm = ({ prodcutValue, onSubmitClick }) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [collectionType, setCollectionType] = useState('')
  const [collectionCode, setCollectionCode] = useState('')
  const [gender, setGender] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [brand, setBrand] = useState('')
  const [images, setImages] = useState('')
  const [displayImage, setDisplayImage] = useState('')
  const [description, setDescription] = useState('')
  const [details, setDetails] = useState('')
  const [specs, setSpecs] = useState('')
  const [quantityS, setQuantityS] = useState('')
  const [quantityM, setQuantityM] = useState('')
  const [quantityL, setQuantityL] = useState('')
  const [quantityXL, setQuantityXL] = useState('')

  useEffect(() => {
    setName(prodcutValue?.name ?? '')
    setCategory(prodcutValue?.category ?? '')
    setCollectionType(prodcutValue?.collectionType ?? '')
    setCollectionCode(prodcutValue?.collectionCode ?? '')
    setGender(prodcutValue?.gender ?? '')
    setColor(prodcutValue?.color ?? '')
    setPrice(prodcutValue?.price ?? '')
    setBrand(prodcutValue?.brand ?? '')
    setImages(prodcutValue?.images?.join('\n') ?? '')
    setDisplayImage(prodcutValue?.displayImage ?? '')
    setDescription(prodcutValue?.description ?? '')
    setDetails(prodcutValue?.description ?? '')
    setSpecs(prodcutValue?.specs?.join('\n') ?? '')
    setQuantityS(
      prodcutValue?.sizes?.filter((size) => size.size === 'S')?.[0]?.quantity ??
        ''
    )
    setQuantityM(
      prodcutValue?.sizes?.filter((size) => size.size === 'M')?.[0]?.quantity ??
        ''
    )
    setQuantityL(
      prodcutValue?.sizes?.filter((size) => size.size === 'L')?.[0]?.quantity ??
        ''
    )
    setQuantityXL(
      prodcutValue?.sizes?.filter((size) => size.size === 'XL')?.[0]
        ?.quantity ?? ''
    )
  }, [prodcutValue])

  const [errors] = useState({
    name: '',
    category: '',
    collectionType: '',
    collectionCode: '',
    gender: '',
    color: '',
    price: '',
    brand: '',
    images: '',
    displayImage: '',
    quantity: '',
  })

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
      images: images?.split('\n'),
      displayImage,
      description,
      details,
      specs: specs ? specs?.split('\n') : [''],
      sizes: [
        { size: 'S', quantity: quantityS ? +quantityS : 0 },
        { size: 'M', quantity: quantityM ? +quantityM : 0 },
        { size: 'L', quantity: quantityL ? +quantityL : 0 },
        { size: 'XL', quantity: quantityXL ? +quantityXL : 0 },
      ],
    }
    onSubmitClick(newProduct)
  }

  return (
    <div className={`w-full max-w-2xl ml-24 p-12`}>
      <form
        onSubmit={(e) => sumbitProduct(e)}
        className="flex flex-col gap-2 items-start allign-center"
      >
        <div className="w-full flex flex-col gap-2 mx-4 p-2">
          <label htmlFor="name">Product Name</label>
          <TextInput
            id={'name'}
            required={true}
            onChange={(e) => setName(e.target.value)}
            // required={true}
            // onBlur={(e) => setNameBlur()}
            extraClasses={'w-full'}
            placeholder="Product Name"
            value={name}
          />
          {errors.name ? <p className="text-red-600">{errors.name}</p> : <></>}
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Category</label>
            <TextInput
              required={true}
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            {errors.category ? (
              <p className="text-red-600">{errors.category}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Collection Type</label>
            <TextInput
              required={true}
              placeholder="Collection Type"
              value={collectionType}
              onChange={(e) => setCollectionType(e.target.value)}
            />
            {errors.collectionType ? (
              <p className="text-red-600">{errors.collectionType}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Collection Code</label>
            <TextInput
              required={true}
              placeholder="Collection Code"
              value={collectionCode}
              onChange={(e) => setCollectionCode(e.target.value)}
            />
            {errors.collectionCode ? (
              <p className="text-red-600">{errors.collectionCode}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Gender</label>
            <TextInput
              required={true}
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            {errors.gender ? (
              <p className="text-red-600">{errors.gender}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Colour</label>
            <TextInput
              required={true}
              placeholder="Colour"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            {errors.color ? (
              <p className="text-red-600">{errors.color}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Price</label>
            <input
              required={true}
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className=""
            />
            {errors.price ? (
              <p className="text-red-600">{errors.price}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">DisplayImage</label>
            <TextInput
              required={true}
              placeholder="DisplayImage"
              value={displayImage}
              onChange={(e) => setDisplayImage(e.target.value)}
            />
            {errors.displayImage ? (
              <p className="text-red-600">{errors.displayImage}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col gap-2 mx-4 p-2">
            <label className="">Brand</label>
            <TextInput
              required={true}
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            {errors.brand ? (
              <p className="text-red-600">{errors.brand}</p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="w-full h-36 flex flex-col gap-2 mx-4 p-2">
          <label className="">Images</label>
          <TextArea
            required={true}
            extraClasses={'w-full h-full'}
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
          {errors.displayImage ? (
            <p className="text-red-600">{errors.displayImage}</p>
          ) : (
            <></>
          )}
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
        <div className="flex flex-col">
          <label className="p-2 my-4">Sizes</label>
          <div className="grid grid-cols-2">
            <div className="flex flex-row">
              <label className="p-2 mx-auto">S</label>
              <TextInput
                required={true}
                placeholder="Enter Numer"
                value={quantityS}
                onChange={(e) => setQuantityS(e.target.value)}
              />
            </div>
            <div className="flex flex-row">
              <label className="p-2 mx-auto">M</label>
              <TextInput
                required={true}
                placeholder="Enter Numer"
                value={quantityM}
                onChange={(e) => setQuantityM(e.target.value)}
              />
            </div>
            <div className="flex flex-row">
              <label className="p-2 mx-auto">L</label>
              <TextInput
                required={true}
                placeholder="Enter Numer"
                value={quantityL}
                onChange={(e) => setQuantityL(e.target.value)}
              />
            </div>
            <div className="flex flex-row">
              <label className="p-2 mx-auto">XL</label>
              <TextInput
                required={true}
                placeholder="Enter Numer"
                value={quantityXL}
                onChange={(e) => setQuantityXL(e.target.value)}
              />
            </div>
          </div>
          {errors.quantity ? (
            <p className="p-2 text-red-600">{errors.quantity}</p>
          ) : (
            <></>
          )}
        </div>
        <PrimaryButton extraClasses={'mx-2 my-4'} type={'sumbit'}>
          {prodcutValue ? 'Edit Product' : 'Create Prodcut'}
        </PrimaryButton>
      </form>
    </div>
  )
}

export default DetaildProductForm
