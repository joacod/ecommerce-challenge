import { useState } from 'react'
import { ProductsService } from '../../services/products.service'

const EMPTY_FORM = { id: 0, name: '', description: '', price: 0 }

export const AddProduct = () => {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')

  const handleFormDataChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setProcessing(true)
    setError('')

    try {
      const response = await ProductsService.createProduct(formData)
      setFormData(EMPTY_FORM)

      if (response.error) {
        setError(response.error)
      } else {
        alert(`Product created successfully! 💯`)
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unknown error occurred')
      }
    }

    setProcessing(false)
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl">Add Product</h2>

      <section className="mt-5 overflow-hidden text-left text-gray-800 ">
        <div className="container w-full px-5 py-16 mx-auto rounded-lg lg:w-1/2 bg-give-freely">
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-5">
              <div className="container w-1/2 ">
                <label htmlFor="name">*Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleFormDataChange}
                  required
                  className="w-full px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                ></input>
              </div>
              <div className="container w-1/5">
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleFormDataChange}
                  required
                  className="w-full px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                ></input>
              </div>
            </div>
            <div>
              <label htmlFor="description">*Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleFormDataChange}
                required
                className="w-full px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
              ></textarea>
            </div>

            {error.length > 0 && formData === EMPTY_FORM && (
              <div className="p-2 mt-5 text-center text-white bg-red-700 rounded">
                {error}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={processing}
                className="p-2 mt-5 text-white bg-green-900 rounded cursor-pointer hover:bg-green-700 active:bg-green-600 disabled:bg-gray-600"
              >
                Create Product
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
