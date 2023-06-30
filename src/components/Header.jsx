import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isOpen,setIsOpen} = useContext(SidebarContext)
  
  return(

  <header>
    <div>Header</div>
    <div  >
      <button onClick={()=>setIsOpen(!isOpen)}><BsBag/></button>
    </div>
  </header> 
    )
};

export default Header;
