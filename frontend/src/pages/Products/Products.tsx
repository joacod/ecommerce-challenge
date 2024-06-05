import { useEffect, useState } from 'react'
import { Product } from '../../models/product'
import { ProductsService } from '../../services/products.service'
import { ProductCard } from '../../components/ProductCard/ProductCard'

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)

      const response = await ProductsService.getAll()
      if (response.error) {
        setProducts([])
        setError(response.error)
      } else {
        setProducts(response.data!)
        setError('')
      }

      setIsLoading(false)
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const filterProducts = products.filter((x) =>
      x.name.toLowerCase().startsWith(nameFilter.toLowerCase())
    )
    setFilteredProducts(filterProducts)
  }, [nameFilter, products])

  return (
    <div className="text-center">
      <h2 className="text-2xl ">Products</h2>
      <div className="my-5">
        <label htmlFor="search" className="mr-2">
          Search by Name
        </label>
        <input
          id="search"
          name="search"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
        ></input>
      </div>

      {isLoading ? (
        <h3 className="text-xl">Loading...</h3>
      ) : error !== '' ? (
        <h3 className="text-xl text-red-400">{error}</h3>
      ) : filteredProducts.length > 0 ? (
        <section className="flex flex-wrap mt-2 -m-4">
          {filteredProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </section>
      ) : (
        <p className="text-xl font-bold">No products found</p>
      )}
    </div>
  )
}
