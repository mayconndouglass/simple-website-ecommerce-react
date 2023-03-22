import { createContext, useState, useEffect } from 'react'

// Types
import { ChildrenPropsType } from '../types/children.type'
import { ApiDataType } from '../types/productData.type'

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
