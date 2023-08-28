import Sort from './Sort'
import Filter from './Filter'
import Categories from './Categories'
import { useSelector } from 'react-redux'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SelectionTable = ({ children, tableData, onFilterClick }) => {
  const queryParam = useSelector((state) => state.queryParam)

  const onFilterClickEV = (e) => {
    e.preventDefault()
    onFilterClick(queryParam)
  }
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {tableData.name}
          </h1>
          {tableData?.sortOptions ? (
            <Sort sortOptions={tableData.sortOptions} classNames={classNames} />
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
  )
}

export default SelectionTable
