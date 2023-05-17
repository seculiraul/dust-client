import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import useQueryParam from '../../hooks/useQueryParam'
import {
  addQueryParam,
  removeQueryParam,
} from '../../store/slices/queryParamSlice'

// TODO: New component pentru fiecare input apoi trebuie pus un state sa se vada daca e checked sau nu. Componentul va trebui sa
// comunice cu acest component si sa ii transmita cand a fost click uit si sa ii trimita numele

const Filter = ({ section, extended, ...rest }) => {
  //const { addToQuery, removeFromQuery, queryObject } = useQueryParam()

  const dispatch = useDispatch()
  const queryParam = useSelector((state) => state.queryParam)
  const handleClick = (checked, name, value) => {
    checked
      ? dispatch(addQueryParam({ name, value }))
      : dispatch(removeQueryParam({ name, value }))
  }

  const isCheckboxCheeked = (category, value) => {
    if ([category] in queryParam) {
      return queryParam[category].includes(value)
    }
    return false
  }

  return extended ? (
    <Disclosure
      as="div"
      key={section.id}
      className="border-t border-gray-200 px-4 py-6"
    >
      {({ open }) => (
        <>
          <h3 className="-mx-2 -my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">{section.name}</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <div className="space-y-6">
              {section.options.map((option, optionIdx) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={`filter-mobile-${section.id}-${optionIdx}`}
                    name={`${section.id}[]`}
                    type="checkbox"
                    checked={isCheckboxCheeked(section.id, option.value)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={(e) =>
                      handleClick(e.target.checked, section.id, option.value)
                    }
                  />
                  <label
                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  ) : (
    <Disclosure
      as="div"
      key={section.id}
      className="border-b border-gray-200 py-6"
    >
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">{section.name}</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <div className="space-y-4">
              {section.options.map((option, optionIdx) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={`filter-${section.id}-${optionIdx}`}
                    name={`${section.id}[]`}
                    defaultValue={option.value}
                    type="checkbox"
                    checked={isCheckboxCheeked(section.id, option.value)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Filter
