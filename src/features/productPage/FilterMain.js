import FilterInputs from './FilterInputs'

const FilterMain = ({ data }) => {
  const renderFilters = data?.filters?.map((section, index) => (
    <FilterInputs
      key={index}
      section={section}
      extended
      {...data?.filterEvents}
    />
  ))
  return (
    <div className="flex flex-row px-2 mx-auto gap-x-8 gap-y-4 overflow-auto lg:flex-col appearance-none">
      {renderFilters}
    </div>
  )
}

export default FilterMain
