import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex-1 p-6 mt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
