import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='py-10 px-10 h-20 flex w-screen justify-between'>
        <img 
            className='size-[5rem] object-contain object-top'
            src="/cuvetteLogo.svg" 
            alt='logo'/>
        <Link to='/contact' className='text-xl font-medium'>
            Contact
        </Link>
    </div>
  )
}

export default Navbar