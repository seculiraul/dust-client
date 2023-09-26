import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductList from '../../components/Product-list/ProductList'
import useGetFilterConfigs from '../../hooks/shared/useGetFilterConfigs'
import { useFetchProductsQuery } from '../../store'
import FilterMain from './FilterMain'

const ProductMain = () => {
  const [query, setQuery] = useState({})
  const [searchParams, setSerchParams] = useSearchParams()
  const { data, isSuccess } = useFetchProductsQuery(query)
  const { standard } = useGetFilterConfigs()
  const [page, setPage] = useState(1)

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

  return isSuccess ? (
    <div className="mx-auto max-w-7xl px-4 sm:px06 lg:px-8">
      <h2 className="p-2 mx-2 text-3xl font-bold">Products</h2>
      <div className="flex flex-row justify-start w-full">
        <div className="p-2 mr-24">
          <FilterMain data={standard} />
        </div>
        <div className="flex flex-col">
          <ProductList products={data?.data?.products} />
          <button
            onClick={() => handleLoadMore()}
            className="mx-auto p-2 px-4 rounded bg-gray-500 text-white hover:bg-gray-700 duration-300"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>Req not success</div>
  )
}

export default ProductMain
