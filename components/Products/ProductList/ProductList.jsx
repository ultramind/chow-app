import Product from '../Product/Product'

export default function ProductList({products}) {
  return (
    <div className='row'>
        {products.map(product => (
            <Product/>
        ))}
    </div>
  )
}
