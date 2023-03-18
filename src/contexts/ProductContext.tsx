import { ReactNode, createContext, useState, useEffect } from 'react'

type ProductProviderPropsType = {
  children: ReactNode
}

interface ApiDataType {
  category: string
  description: string
  id: number
  price: number
  rating: {
    rate: number
    count: number
  }
  title: string
}

export const ProductContext = createContext<ApiDataType[]>([])

export const ProductProvider = ({children}: ProductProviderPropsType) => {
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
