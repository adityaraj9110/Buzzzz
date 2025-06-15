import { Footer, Navbar } from 'entities/component'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
