const useGetFilterConfigs = () => {
  const standard = {
    filters: [
      {
        id: 'category',
        name: 'Category',
        options: [
          { value: 'tshirt', label: 'T-Shirt', checked: false },
          { value: 'sweat', label: 'Sweat', checked: false },
          { value: 'shirt', label: 'Shirt', checked: false },
          { value: 'jeans', label: 'Jeans', checked: false },
          { value: 'jackets', label: 'Jackets', checked: false },
          { value: 'pants', label: 'Pants', checked: false },
        ],
      },
      {
        id: 'color',
        name: 'Color',
        options: [
          { value: 'blue', label: 'Blue', checked: false },
          { value: 'green', label: 'Green', checked: false },
          { value: 'red', label: 'Red', checked: false },
          { value: 'yellow', label: 'Yellow', checked: false },
          { value: 'white', label: 'White', checked: false },
          { value: 'black', label: 'black', checked: false },
          { value: 'gray', label: 'Gray', checked: false },
          { value: 'orange', label: 'Orange', checked: false },
          { value: 'brown', label: 'Brown', checked: false },
          { value: 'pink', label: 'Pink', checked: false },
        ],
      },
      {
        id: 'gender',
        name: 'Gender',
        options: [
          { value: 'Men', label: 'Men', checked: false },
          { value: 'women', label: 'Women', checked: false },
          { value: 'unisex', label: 'Unisex', checked: false },
        ],
      },
      {
        id: 'size',
        name: 'Size',
        options: [
          { value: 'S', label: 'S', checked: false },
          { value: 'M', label: 'M', checked: false },
          { value: 'L', label: 'L', checked: false },
          { value: 'XL', label: 'XL', checked: false },
        ],
      },
    ],
    sortOptions: [
      { name: 'Most Popular', href: '#', current: true },
      { name: 'Best Rating', href: '#', current: false },
      { name: 'Newest', href: '#', current: false },
      { name: 'Price: Low to High', href: '#', current: false },
      { name: 'Price: High to Low', href: '#', current: false },
    ],

    filterEvents: {},
  }

  const configs = {
    standard,
  }

  return configs
}

export default useGetFilterConfigs
