import { connect, useSelector } from 'react-redux'
import { fetchProducts } from '../../actions'
import { useEffect, useState } from 'react'
import SelectionTable from '../shared/SelectionTable'
import { useSearchParams } from 'react-router-dom'
import { useFetchProductsQuery } from '../../store'
import axios from 'axios'

const { default: ProductList } = require('./ProductList')

const ProductPage = () => {
  const [query, setQuery] = useState({})

  const queryParam = (query) => {
    const str = query.toString()?.split('=')
    return {
      [str[0]]: str[1],
    }
  }
  const { data, isError, isLoading, isSuccess } = useFetchProductsQuery(query)

  const handleOptions = (param) => {
    console.log('click in the child', param)
  }

  const onFilterClick = (queryParam) => {
    setQuery(queryParam)
  }

  const filterData = {
    name: 'Products',
    filters: [
      {
        id: 'color',
        name: 'Color',
        options: [
          { value: 'white', label: 'White', checked: false },
          { value: 'beige', label: 'Beige', checked: false },
          { value: 'blue', label: 'Blue', checked: true },
          { value: 'brown', label: 'Brown', checked: false },
          { value: 'green', label: 'Green', checked: false },
          { value: 'purple', label: 'Purple', checked: false },
        ],
      },
      {
        id: 'category',
        name: 'Category',
        options: [
          { value: 'new-arrivals', label: 'New Arrivals', checked: false },
          { value: 'sale', label: 'Sale', checked: false },
          { value: 'travel', label: 'Travel', checked: true },
          { value: 'organization', label: 'Organization', checked: false },
          { value: 'accessories', label: 'Accessories', checked: false },
        ],
      },
      {
        id: 'size',
        name: 'Size',
        options: [
          { value: '2l', label: '2L', checked: false },
          { value: '6l', label: '6L', checked: false },
          { value: '12l', label: '12L', checked: false },
          { value: '18l', label: '18L', checked: false },
          { value: '20l', label: '20L', checked: false },
          { value: '40l', label: '40L', checked: false },
        ],
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
    <SelectionTable
      tableData={filterData}
      options={handleOptions}
      onFilterClick={onFilterClick}
    >
      <ProductList products={data?.data?.products} />
    </SelectionTable>
  ) : (
    <div>Req not success</div>
  )

  return <div className="container">{render}</div>
}

export default ProductPage
