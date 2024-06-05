import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex justify-between w-full p-5 text-center text-gray-300 bg-gray-800 shadow-lg opacity-95">
      <div className="flex items-center justify-start">
        <Link to="/" className="flex items-center text-white">
          <span className="ml-3 text-xl font-bold text-give-freely">
            Give Freely
          </span>
        </Link>
      </div>
      <nav className="flex items-center justify-end space-x-2">
        <Link
          to="/products/add"
          className="p-2 rounded cursor-pointer text-green-950 bg-give-freely hover:bg-green-400 active:bg-green-300 disabled:bg-gray-600"
        >
          Add new Product
        </Link>
      </nav>
    </header>
  )
}
