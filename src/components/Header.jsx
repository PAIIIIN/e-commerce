import  { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {BsBag} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'

const Header = () => {
  const {isOpen,setIsOpen} = useContext(SidebarContext)
  
  return(

  <header className='bg-[#F5E6E0] fixed w-full z-10'>
    <div className='container flex items-center justify-between mx-auto h-full'>
    <div>
      <Link to='/'>
    <img className='w-[40px]' src={Logo} alt="" />
    </Link>
    </div>
    <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
      <BsBag className='h-6 w-6'/>
    </div>
    </div>
  </header> 
    )
};

export default Header;
