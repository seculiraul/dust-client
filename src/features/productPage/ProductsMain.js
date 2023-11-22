import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductList from '../../components/Product-list/ProductList'
import Sort from '../../components/shared/Sort'
import useGetFilterConfigs from '../../hooks/shared/useGetFilterConfigs'
import useSortOptions from '../../hooks/shared/useSortOptions'
import { useFetchProductsQuery } from '../../store'
import FilterMain from './FilterMain'

const ProductsMain = () => {
  const [query, setQuery] = useState({})
  const [page, setPage] = useState(1)
  const [searchParams, setSerchParams] = useSearchParams()

  const { standard } = useGetFilterConfigs()
  const { sortOptions } = useSortOptions()

  const { data, isSuccess } = useFetchProductsQuery(query)

  useEffect(() => {
    setQuery(() => {
      const queryObj = {}
      for (const [name, value] of searchParams) {
        queryObj[name] = value
      }
      return queryObj
    })
  }, [searchParams])

  const handleLoadMore = () => {
    const newPage = page + 1
    setPage(newPage)
    searchParams.set('page', newPage)
    setSerchParams(searchParams)
  }

  const onSortClick = (val) => {
    searchParams.set('sort', val)
    setSerchParams(searchParams)
  }

  return isSuccess ? (
    <div className="mx-auto lg:mx-0 lg:ml-32 max-w-md xl:max-w-7xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl px-4 sm:px06 lg:px-8">
      <div className="w-full flex flex-row justify-between">
        <h2 className="p-2 mx-2 text-3xl font-bold">Products</h2>
        <Sort sortOptions={sortOptions} sortClick={onSortClick} />
      </div>
      <div className="flex flex-col lg:flex-row justify-start w-full">
        <div className="p-2 lg:mr-24">
          <FilterMain data={standard} />
        </div>
        <div className="flex flex-col">
          <ProductList products={data?.data?.products} />
          {data?.data?.products.length > 20 && (
            <button
              onClick={() => handleLoadMore()}
              className="mx-auto p-2 px-4 rounded bg-gray-500 text-white hover:bg-gray-700 duration-300"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>Req not success</div>
  )
}

export default ProductsMain
