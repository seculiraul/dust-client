import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Sort from './Sort'
import Filter from './Filter'
import Categories from './Categories'
import { useSelector } from 'react-redux'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SelectionTable = ({ children, tableData, onFilterClick }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const queryParam = useSelector((state) => state.queryParam)

  const onFilterClickEV = (e) => {
    e.preventDefault()
    onFilterClick(queryParam)
  }
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <ul className="px-2 py-3 font-medium text-gray-900">
                      {tableData?.subCategories
                        ? tableData?.subCategories.map((subCategory) => (
                            <Categories
                              key={subCategory.name}
                              category={subCategory}
                            />
                          ))
                        : null}
                    </ul>
                    {tableData?.filters
                      ? tableData.filters.map((section) => (
                          <Filter
                            key={section.name}
                            section={section}
                            extended={false}
                          />
                        ))
                      : null}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {tableData.name}
            </h1>
            {tableData?.sortOptions ? (
              <Sort
                sortOptions={tableData.sortOptions}
                classNames={classNames}
              />
            ) : null}
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              {tableData?.name || ''}
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {tableData?.subCategories
                    ? tableData?.subCategories.map((category) => (
                        <Categories
                          key={category.name}
                          category={category}
                          extended
                        />
                      ))
                    : null}
                </ul>

                {tableData?.filters
                  ? tableData.filters.map((section) => (
                      <Filter
                        key={section.name}
                        section={section}
                        extended
                        {...tableData.filterEvents}
                      />
                    ))
                  : null}
                <button
                  onClick={(e) => onFilterClickEV(e)}
                  className="w-full mt-2 p-4 bg-black text-white rounded-xl hover:bg-slate-800 duration-200"
                >
                  Filter
                </button>
              </form>
              {/* Product grid */}
              <div className="lg:col-span-3">{children}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default SelectionTable
