import { Link, useParams } from 'react-router-dom'
import { ProductsService } from '../../services/products.service'
import { useEffect, useState } from 'react'
import { Product } from '../../models/product'

export const ProductDetail = () => {
  const { productId } = useParams()
  const productIntId = parseInt(productId!)
  const productImage =
    '/product-' +
    (productIntId > 0 && productIntId < 6 ? productId : '1') +
    '.webp'

  const [product, setProduct] = useState<Product | null>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)

      const response = await ProductsService.getProduct(productId!)
      if (response.error) {
        setProduct(null)
        setError(response.error)
      } else {
        setProduct(response.data!)
        setError('')
      }

      setIsLoading(false)
    }

    fetchProduct()
  }, [productId])

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl ">Product Details</h2>

      {isLoading ? (
        <h3 className="text-xl">Loading...</h3>
      ) : error !== '' ? (
        <h3 className="text-xl text-red-400">{error}</h3>
      ) : (
        <section className="mt-5 overflow-hidden text-left text-gray-800 lg:w-3/5">
          <div className="container px-5 py-16 mx-auto rounded-lg bg-give-freely">
            <div className="flex flex-wrap mx-auto lg:w-4/5">
              <img
                alt="ecommerce image"
                className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto"
                src={productImage}
              />
              <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                <h2 className="text-sm tracking-widest text-gray-600 ">
                  BRAND
                </h2>
                <h1 className="mb-1 text-3xl font-medium ">{product?.name}</h1>
                <p className="leading-relaxed">{product?.description}</p>
                <div className="flex mt-5 mb-5 border-t-2 border-gray-700">
                  <span className="mt-4 text-2xl font-medium text-green-800 ">
                    ${product?.price}
                  </span>
                </div>

                <Link
                  to="/"
                  className="p-2 text-white bg-green-900 rounded cursor-pointer hover:bg-green-700 active:bg-green-600 disabled:bg-gray-600"
                >
                  ◀️ Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
