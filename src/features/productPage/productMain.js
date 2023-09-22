import { useState } from 'react'
import ProductList from '../../components/Product-list/ProductList'
import { useFetchProductsQuery } from '../../store'
import FilterMain from './FilterMain'

const ProductMain = () => {
  const [query, setQuery] = useState({})
  const { data, isSuccess } = useFetchProductsQuery(query)

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
          { value: 'blue', label: 'Blue', checked: false },
          { value: 'green', label: 'Green', checked: false },
          { value: 'red', label: 'Red', checked: false },
        ],
      },
      {
        id: 'gender',
        name: 'Gender',
        options: [{ value: 'Male', label: 'Male', checked: false }],
      },
      {
        id: 'size',
        name: 'Size',
        options: [
          { value: 'S', label: 'S', checked: false },
          { value: 'M', label: 'M', checked: false },
          { value: 'L', label: 'L', checked: false },
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

  return isSuccess ? (
    <div className="mx-auto max-w-7xl px-4 sm:px06 lg:px-8">
      <div className="flex flex-row w-full">
        <div className="p-2 mr-24">
          <FilterMain data={filterData} />
        </div>
        <div>
          <ProductList products={data?.data?.products} />
        </div>
      </div>
    </div>
  ) : (
    <div>Req not success</div>
  )
}

export default ProductMain
