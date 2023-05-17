import { useState } from 'react'

const Test = () => {
  const [queryObject, setQueryObject] = useState({
    categorie: ['papuci'],
  })
  const data = [
    {
      name: 'categorie',
      value: ['papuci', 'tricouri', 'bluze'],
    },
    {
      name: 'marime',
      value: ['s', 'm', 'l'],
    },
    {
      name: 'culoare',
      value: ['galben', 'albastru', 'rosu'],
    },
  ]

  const addToQuery = (name, value) => {
    const obj = { ...queryObject }
    if ([name] in obj) {
      obj[name].push(value)
    } else {
      obj[name] = [value]
    }
    setQueryObject(obj)
    console.log(obj)
  }

  const removeFromQuery = (name, value) => {
    const obj = { ...queryObject }
    const index = obj[name].indexOf(value)
    obj[name].splice(index, 1)
    if (obj[name].length < 1) {
      delete obj[name]
    }
    setQueryObject(obj)
    console.log(obj)
  }

  const isCheckboxCheeked = (category, value) => {
    if ([category] in queryObject) {
      return queryObject[category].includes(value)
    }
    return false
  }

  const onChangeCheckbox = (checked, name, value) => {
    checked ? addToQuery(name, value) : removeFromQuery(name, value)
  }

  const renderHeader = data.map((el) => (
    <div key={el.name}>
      <h4>{el.name}</h4>
      {el.value.map((v) => (
        <div key={v}>
          <input
            type="checkbox"
            checked={isCheckboxCheeked(el.name, v)}
            onChange={(e) => onChangeCheckbox(e.target.checked, el.name, v)}
          />
          <label>{v}</label>
        </div>
      ))}
    </div>
  ))
  return (
    <>
      <div className="flex flex-col m-2 p-2">{renderHeader}</div>
    </>
  )
}

export default Test
