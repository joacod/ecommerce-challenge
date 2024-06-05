import './App.css'
import { AddProduct } from './pages/Products/AddProduct'
import { Layout } from './pages/Layout/Layout'
import { NotFound } from './pages/NotFound/NotFound'
import { ProductDetail } from './pages/Products/ProductDetail'
import { Products } from './pages/Products/Products'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/products/:productId',
        element: <ProductDetail />,
      },
      {
        path: '/products/add',
        element: <AddProduct />,
      },
    ],
  },
])

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
