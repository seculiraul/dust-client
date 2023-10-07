import DetaildProductForm from '../../../components/shared/forms/DetaildProductForm'

const EditProduct = () => {
  const product = {
    name: 'name',
    brand: 'brand',
    category: 'category',
    collectionType: 'collectionType',
    collectionCode: 'collectionCode',
    gender: 'gender',
    sizes: [
      {
        size: 'S',
        quantity: 100,
      },
      {
        sieze: 'M',
        quantity: 300,
      },
    ],
  }

  return <DetaildProductForm prodcutValue={product} />
}

export default EditProduct
