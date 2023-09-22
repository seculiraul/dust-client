const Category = ({ category, extended }) => {
  return (
    <li key={category.name}>
      <a href={category.href} className="block px-2 py-3">
        {category.name}
      </a>
    </li>
  )
}

export default Category
