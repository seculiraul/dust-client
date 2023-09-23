import { useSearchParams } from 'react-router-dom'

const useFilterInputs = () => {
  const [searchParams, setSerchParam] = useSearchParams()

  const addQuery = (name, value) => {
    const current = searchParams.get(name)?.split(',')
    if (current) {
      current.push(value)
      searchParams.delete(name)
      searchParams.append(name, current)
    } else {
      searchParams.append(name, value)
    }
    setSerchParam(searchParams)
  }

  const removeQuery = (name, value) => {
    const current = searchParams.get(name)?.split(',')
    searchParams.delete(name)
    if (current.length > 1) {
      const newParams = current.filter((el) => el !== value)
      searchParams.append(name, newParams)
    }
    setSerchParam(searchParams)
  }

  const isCheckboxCheeked = (category, value) => {
    return !!searchParams.get(category)?.split(',')?.includes(value)
  }

  return { addQuery, removeQuery, isCheckboxCheeked }
}

export default useFilterInputs
