import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Link } from 'react-router-dom'
import ImageSlider from '../shared/ImageSlider'
import DialogPopup from '../shared/DialogPopup'
import useSingleProduct from '../../hooks/single-product/useSinglePorduct'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SingleProduct = () => {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')

  const {
    product,
    user,
    dialogProps,
    onAddToCart,
    onOtherColorClick,
    onDeleteClick,
    onEditClick,
  } = useSingleProduct()

  const onAddToCartClick = (e) => {
    e.preventDefault()
    onAddToCart(selectedSize)
  }

  return (
    <>
      <DialogPopup dialogProperties={dialogProps} />
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {product?.breadcrumbs?.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.name}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a
                  href={product?.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {product?.name}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="h-[50vh] w-38 mx-auto mt-6 mb-32 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
            <ImageSlider slides={product?.images} />
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product?.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex flex-row gap-3">
                <p
                  className={`text-3xl tracking-tight text-gray-900 ${
                    product?.salePrice ? 'line-through' : ''
                  }`}
                >
                  {`$${product?.price}`}
                </p>
                {product?.salePrice && (
                  <p className="text-3xl tracking-tight text-red-600">
                    ${product?.salePrice}
                  </p>
                )}
              </div>

              <form className="mt-10">
                {/* Colors */}
                {product?.otherColors?.length > 0 ? (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Other Colors
                    </h3>

                    <RadioGroup
                      value={selectedColor ?? ''}
                      onChange={setSelectedColor}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        {' '}
                        Choose a color{' '}
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product?.otherColors?.map((col) => (
                          <RadioGroup.Option
                            style={{ backgroundColor: col?.color }}
                            onClick={() => onOtherColorClick(col?.color)}
                            key={col?.color}
                            className={({ active, checked }) =>
                              classNames(
                                `ring-gray-400`,
                                active && checked ? 'ring ring-offset-1' : '',
                                !active && checked ? 'ring-2' : '',
                                '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {' '}
                              {col.color}{' '}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                col.class,
                                'h-8 w-8 border border-black border-opacity-10 rounded-full'
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                ) : null}

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <Link
                      to={'#'}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </Link>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      {' '}
                      Choose a size{' '}
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product?.sizes?.map((el) => (
                        <RadioGroup.Option
                          key={el?.size}
                          value={el?.size}
                          disabled={!(el?.quantity > 0)}
                          className={({ active }) =>
                            classNames(
                              el.quantity > 0
                                ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                              active ? 'ring-2 ring-indigo-500' : '',
                              'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {el.size}
                              </RadioGroup.Label>
                              {el?.quantity > 0 ? (
                                <span
                                  className={classNames(
                                    active ? 'border' : 'border-2',
                                    checked
                                      ? 'border-indigo-500'
                                      : 'border-transparent',
                                    'pointer-events-none absolute -inset-px rounded-md'
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex flex-col"></div>
                <button
                  type="submit"
                  disabled={selectedSize === ''}
                  onClick={(e) => onAddToCartClick(e)}
                  className={classNames(
                    selectedSize !== ''
                      ? 'mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 duration-200'
                      : 'mt-10 flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium bg-indigo-300 text-white cursor-not-allowed duration-200'
                  )}
                >
                  Add to cart
                </button>
                {user?.role?.includes('admin') && (
                  <div className="flex flex-row justify-between mt-2">
                    <button
                      onClick={() => onEditClick()}
                      className="py-2 px-4 text-white rounded bg-gray-400 hover:bg-gray-500 duration-200"
                    >
                      Edit Product
                    </button>
                    <button
                      type="button"
                      onClick={(e) => onDeleteClick(e)}
                      className="py-2 px-4 text-white rounded bg-red-400 hover:bg-red-500 duration-200"
                    >
                      Delete Product
                    </button>
                  </div>
                )}
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    {product?.specs?.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product?.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SingleProduct
