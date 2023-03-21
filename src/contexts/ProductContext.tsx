import { createContext, useState, useEffect } from 'react'

import { ChildrenPropsType } from '../types/children.type'

export interface ApiDataType {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: {
    rate: number
    count: number
  }
  title: string
}

export const ProductContext = createContext<ApiDataType[]>([])

export const ProductProvider = ({children}: ChildrenPropsType) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await (await fetch('https://fakestoreapi.com/products')).json()
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={ products }>
      {children}
    </ProductContext.Provider>
  )  
}
