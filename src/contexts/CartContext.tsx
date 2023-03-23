import { createContext, useState, useEffect } from 'react'

// Types
import { ChildrenPropsType } from '../types/children.type'
import { ApiDataType } from '../types/productData.type'

type CartContextType = {
  addToCart: (product: ApiDataType, id: number) => void
  cart: Array<ApiDataType>
  removeFromCart: (id: number) => void
  clearCart: () => void
  increaseAmount: (id: number) => void
  decreaseAmount: (id: number) => void
  itemAmount: number
  total: number
}

const initialState = {
  addToCart: () => {},
  removeFromCart: () => {},
  cart: [],
  clearCart: () => {},
  increaseAmount: () => {},
  decreaseAmount: () => {},
  itemAmount: 0,
  total: 0,
}

export const CartContext = createContext<CartContextType>(initialState)

export const CartProvider = ({ children }: ChildrenPropsType) => {
  const [cart, setCart] = useState<Array<ApiDataType>>([])
  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)
  
  // update Total
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount!
    }, 0)
    setTotal(total)
  })
  
  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount!
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])
  
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

  const removeFromCart = (id: number) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const increaseAmount = (id: number) => {
    const item = cart.find(item => item.id === id)
    addToCart(item!, id)
    console.log('entrou');
  }

  const decreaseAmount = (id: number) => {
    const item = cart.find(item => item.id === id)
    if (item) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, amount: item.amount! - 1}
        }

        return item
      })
      setCart(newCart)
    }

    if (item!.amount! < 2 ) {
      removeFromCart(id)
    }
  }

  const valueProvider = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    itemAmount,
    total,
  }

  return (
    <CartContext.Provider value={valueProvider}>
      {children}
    </CartContext.Provider>  
  )
}
