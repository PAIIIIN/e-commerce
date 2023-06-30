 import React,{createContext,useState,useEffect} from 'react';


export const CartContext = createContext()  
const CartProvider = ({children}) => {
  const[cart,setCart] = useState([])
  const [itemAmount,setItemAmount] = useState(0)
  const [price , setPrice] = useState(0)

  useEffect(()=>{
    if(cart){
      const price = cart.reduce((accumulator,currentItem)=>{
        return accumulator + currentItem.price * currentItem.amount
      },0)
      setPrice(price)
    }
  },[cart])


const allAmount = ()=>{
  let amounts = 0
  cart.map((item)=>{
    return amounts += item.amount
  })
  setItemAmount(amounts)
}

  const addToCart = (product,id) =>{
    const newItem = {...product,amount: 1}
    
    const cartItem = cart.find(item=>{
      return item.id === id;
    });
    if(cartItem){
      const newCart = [...cart].map((item)=>{
        if (item.id === id) {
          return {...item, amount: cartItem.amount + 1};
        }
        else {
          return item;
        }
      });
      setCart(newCart)
    }else{
      setCart([...cart,newItem]);
    }
  };
  const removeFromCart = (id) => {
    const newCart = cart.filter((item)=>{
      return item.id !== id
    });
    setCart(newCart)
  };
  const clearCart = ()=>{
    setCart([])
  }
  const increaseAmount = (id)=>{
    const item = cart.find((item)=>{
      return item.id === id
    })
    addToCart(item,id)
  }
  const decreaseAmount = (id)=>{
    const cartItem = cart.find(item=>{
      return item.id === id
    })
    if(cartItem){
      const newCart = cart.map((item)=>{
        if(item.id === id){
          return{...item,amount: cartItem.amount - 1}
        }
        else{
          return item
        }
      });
      setCart(newCart)
      }

    if (cartItem.amount < 2){
        removeFromCart(id)
      }
  
    }
    
    
    return <CartContext.Provider
     value={{cart,itemAmount,allAmount,addToCart,price,removeFromCart,clearCart,increaseAmount,decreaseAmount}}>
      {children}</CartContext.Provider>;
};


export default CartProvider;
