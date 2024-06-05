import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl">404 - Not found</h2>
      <Link
        to="/"
        className="p-2 mt-5 text-white bg-green-900 rounded cursor-pointer hover:bg-green-700 active:bg-green-600 disabled:bg-gray-600"
      >
        ◀️ Back to Home
      </Link>
    </section>
  )
}
