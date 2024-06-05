import { Link } from 'react-router-dom'
import { Product } from '../../models/product'

export const ProductCard = ({ item }: { item: Product }) => {
  const productImage =
    '/product-' + (item.id > 0 && item.id < 6 ? item.id : '1') + '.webp'

  return (
    <article className="p-4 xl:w-1/4 md:w-1/2">
      <div className="p-6 rounded-lg bg-give-freely">
        <Link to={'/products/' + item.id}>
          <img
            className="object-cover object-center w-full mb-6 rounded h-96"
            src={productImage}
            alt="product image"
          />
        </Link>
        <h3 className="text-xs text-green-900 ">PRICE: ${item.price}</h3>
        <h2 className="mb-4 text-lg text-black">{item.name}</h2>
        <p className="mb-4 text-gray-900">{item.description}</p>
        <Link
          className="p-2 text-white bg-green-900 rounded cursor-pointer hover:bg-green-700 active:bg-green-600 disabled:bg-gray-6000"
          to={'/products/' + item.id}
        >
          Details ▶️
        </Link>
      </div>
    </article>
  )
}
