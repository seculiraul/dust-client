import { useState } from 'react'

const useQueryParam = () => {
  const [queryObject, setQueryObject] = useState({})

  const addToQuery = (name, value) => {
    const obj = { ...queryObject }
    if ([name] in obj) {
      obj[name].push(value)
    } else {
      obj[name] = [value]
    }
    setQueryObject(obj)
  }

  const removeFromQuery = (name, value) => {
    const obj = { ...queryObject }
    const index = obj[name].indexOf(value)
    obj[name].splice(index, 1)
    if (obj[name].length < 1) {
      delete obj[name]
    }
    setQueryObject(obj)
  }

  return {
    addToQuery,
    removeFromQuery,
    queryObject,
    setQueryObject,
  }
}

export default useQueryParam
