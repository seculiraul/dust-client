import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import useFilterInputs from '../../hooks/filter-inputs/useFilterInputs'

const FilterInputs = ({ section, extended, ...rest }) => {
  // TODO: New component pentru fiecare input apoi trebuie pus un state sa se vada daca e checked sau nu. Componentul va trebui sa
  // comunice cu acest component si sa ii transmita cand a fost click uit si sa ii trimita numele

  const { addQuery, removeQuery, isCheckboxCheeked } = useFilterInputs()
  const handleClick = (checked, name, value) => {
    checked ? addQuery(name, value) : removeQuery(name, value)
  }

  return (
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
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    id={`filter-mobile-${section.id}-${optionIdx}`}
                    name={`${section.id}[]`}
                    type="checkbox"
                    checked={isCheckboxCheeked(section.id, option.value)}
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
  )
}

export default FilterInputs
