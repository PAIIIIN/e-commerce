import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'

import CartItem from '../components/CartItem'
import {SidebarContext} from '../contexts/SidebarContext'

import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen , handleClose} = useContext(SidebarContext)
  const { cart,clearCart} = useContext(CartContext)
  return (
  <div className={`w-full bg-white fixed top-0 h-full 
  md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] shadow-2xl ${isOpen ? 'right-0':'-right-full'}`}>
  
  <div className='flex items-center justify-between py-6 border-b'>
    <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
    <div onClick={handleClose} className='cursor-pointer w-8 h- flex justify-center items-center'>
      <IoMdArrowForward className='text-2xl'/>
    </div>
  </div>
     <div >
      {cart.map((item) =>{
        return <CartItem item={item} key={item.id}/>
        
      })}
     </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* total price */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>price</span>
          </div>
          {/* clear cart */}
          <div onClick={()=>{clearCart()}} className='py-4 cursor-pointer w-12 h-12 text-white flex justify-center items-center text-xl'>
            <FiTrash2 />
            </div>
        </div>
      </div>
  </div>


    )
};

export default Sidebar;
