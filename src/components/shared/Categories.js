const Categories = ({ category, extended }) => {
  return extended ? (
    <li key={category.name}>
      <a href={category.href} className="block px-2 py-3">
        {category.name}
      </a>
    </li>
  ) : (
    <li key={category.name}>
      <a href={category.href}>{category.name}</a>
    </li>
  )
}

export default Categories
