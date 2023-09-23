import Category from './Category'
import FilterInputs from './FilterInputs'

const FilterMain = ({ data }) => {
  const renderCategories = data?.categories?.map((category, index) => (
    <Category key={index} category={category} />
  ))

  const renderFilters = data?.filters?.map((section, index) => (
    <FilterInputs
      key={index}
      section={section}
      extended
      {...data?.filterEvents}
    />
  ))
  return (
    <div className="flex flex-col gap-x-8 gap-y-4 lg:grid-cols-4">
      <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
        {renderCategories}
      </ul>
      {renderFilters}
    </div>
  )
}

export default FilterMain
