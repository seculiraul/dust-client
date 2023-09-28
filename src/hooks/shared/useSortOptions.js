const useSortOptions = () => {
  const sortOptions = {
    sortOptions: [
      { name: 'Name A - Z', current: false, value: 'name-asc' },
      { name: 'Name Z - A', current: false, value: 'name-desc' },
      { name: 'Price low - high', current: false, value: 'price-asc' },
      { name: 'Price high - low', current: true, value: 'price-desc' },
    ],
  }
  return sortOptions
}

export default useSortOptions
