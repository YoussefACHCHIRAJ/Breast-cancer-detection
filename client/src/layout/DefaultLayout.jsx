import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const DefaultLayout = () => {
  return (
    <div className="lg:mx-6 flex flex-col max-h-screen">
      <Header />
      <Outlet />
    </div>
  )
}

export default DefaultLayout