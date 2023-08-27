import { useState } from 'react'
import SelectionTable from '../shared/SelectionTable'
import { useFetchProductsQuery } from '../../store'

const { default: ProductList } = require('./ProductList')

const ProductPage = () => {
  const [query, setQuery] = useState({})
  const { data, isSuccess } = useFetchProductsQuery(query)

  const onFilterClick = (queryParam) => {
    setQuery(queryParam)
  }

  const transformDataToOptions = (option) => {
    return [
      ...new Set(data?.data?.products?.map((prod) => prod?.[option])),
    ].map((opt) => {
      return {
        value: opt,
        label: `${opt?.charAt(0).toUpperCase()}${opt.slice(1)}`,
        checked: false,
      }
    })
  }

  const transformSIzes = (productsArray) => {
    const uniqueSizesSet = new Set()

    productsArray?.forEach((product) => {
      product?.sizes?.forEach((sizeObj) => {
        uniqueSizesSet.add(sizeObj.size)
      })
    })

    return Array.from(uniqueSizesSet).map((size) => {
      return {
        value: size,
        label: size.toUpperCase(),
        checked: false,
      }
    })
  }

  const filterData = {
    name: 'Products',
    filters: [
      {
        id: 'color',
        name: 'Color',
        options: transformDataToOptions('color'),
      },
      {
        id: 'gender',
        name: 'Gender',
        options: transformDataToOptions('gender'),
      },
      {
        id: 'size',
        name: 'Size',
        options: transformSIzes(data?.data?.products),
      },
    ],
    sortOptions: [
      { name: 'Most Popular', href: '#', current: true },
      { name: 'Best Rating', href: '#', current: false },
      { name: 'Newest', href: '#', current: false },
      { name: 'Price: Low to High', href: '#', current: false },
      { name: 'Price: High to Low', href: '#', current: false },
    ],

    filterEvents: {},
  }

  const render = isSuccess ? (
    <SelectionTable tableData={filterData} onFilterClick={onFilterClick}>
      <ProductList products={data?.data?.products} />
    </SelectionTable>
  ) : (
    <div>Req not success</div>
  )

  return <div className="container">{render}</div>
}

export default ProductPage
