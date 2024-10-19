import HomeNavbar from '../components/HomeNavbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
        <HomeNavbar/>
        <Outlet/>
    </>
  )
}

export default HomeLayout