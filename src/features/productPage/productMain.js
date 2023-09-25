import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductList from '../../components/Product-list/ProductList'
import useGetFilterConfigs from '../../hooks/shared/useGetFilterConfigs'
import { useFetchProductsQuery } from '../../store'
import FilterMain from './FilterMain'

const ProductMain = () => {
  const [query, setQuery] = useState({})
  const [searchParams] = useSearchParams()
  const { data, isSuccess } = useFetchProductsQuery(query)
  const { standard } = useGetFilterConfigs()

  useEffect(() => {
    setQuery(() => {
      const newQuery = transformSearchParamsInQbj()
      return newQuery
    })
  }, [searchParams])

  const transformSearchParamsInQbj = () => {
    const queryObj = {}
    for (const [name, value] of searchParams) {
      queryObj[name] = value
    }
    return queryObj
  }

  return isSuccess ? (
    <div className="mx-auto max-w-7xl px-4 sm:px06 lg:px-8">
      <h2 className="p-2 mx-2 text-3xl font-bold">Products</h2>
      <div className="flex flex-row justify-start w-full">
        <div className="p-2 mr-24">
          <FilterMain data={standard} />
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
