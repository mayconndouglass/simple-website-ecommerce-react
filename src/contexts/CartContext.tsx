import { createContext, useState, useEffect } from 'react'

// Types
import { ChildrenPropsType } from '../types/children.type'
import { ApiDataType } from '../types/productData.type'

type CartContextType = {
  addToCart: (product: ApiDataType, id: number) => void
  cart: Array<ApiDataType>
}

const initialState = {
  addToCart: () => {},
  cart: []
}

export const CartContext = createContext<CartContextType>(initialState)

export const CartProvider = ({ children }: ChildrenPropsType) => {
  const [cart, setCart] = useState<Array<ApiDataType>>([])
  
  const addToCart = (product: ApiDataType, id: number) => {
    const newItem = { ...product, amount: 1 }
    
    const itemAlreadyAdded = cart.find(item => item.id === id)
    if (itemAlreadyAdded) {
      const newItem = [...cart].map(item => {
        if (item.id === id) {
          return {...item, amount: itemAlreadyAdded.amount! + 1}
        } 
        
        return item
      })

      setCart(newItem)
      return
    }  
    
    setCart([...cart, newItem])
  }

  return (
    <CartContext.Provider value={{cart, addToCart }}>
      {children}
    </CartContext.Provider>  
  )
}
