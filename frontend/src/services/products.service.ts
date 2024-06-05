import { ApiResponse } from '../models/apiResponse'
import { Product } from '../models/product'

const BASE_URL = 'http://localhost:3000/'
const DEFAULT_ERROR = 'Something went wrong, try again later'

export const ProductsService = {
  async getAll(): Promise<ApiResponse<Product[]>> {
    try {
      const response = await fetch(BASE_URL + 'products')

      if (!response.ok) {
        const errorData = await response.json()
        const errorMessage = errorData.error || 'Failed to fetch Products'
        return { error: errorMessage }
      }

      const data = (await response.json()) as Product[]

      return { data: data }
    } catch (error) {
      return { error: DEFAULT_ERROR }
    }
  },
  async getProduct(productId: string): Promise<ApiResponse<Product>> {
    try {
      const response = await fetch(BASE_URL + `products/${productId}`)

      if (!response.ok) {
        const errorData = await response.json()
        const errorMessage = errorData.error || 'Failed to fetch the Product'
        return { error: errorMessage }
      }

      const data = (await response.json()) as Product

      return { data: data }
    } catch (error) {
      return { error: DEFAULT_ERROR }
    }
  },
  async createProduct(product: Product): Promise<ApiResponse<Product>> {
    try {
      const response = await fetch(BASE_URL + `products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })

      if (!response.ok) {
        const errorData = await response.json()
        const errorMessage = errorData.error || 'Failed to create a Product'
        return { error: errorMessage }
      }

      const data = (await response.json()) as Product

      return { data: data }
    } catch (error) {
      return { error: DEFAULT_ERROR }
    }
  },
}
