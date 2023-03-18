import { useContext } from 'react'

import { ProductContext } from '../contexts/ProductContext'

export const Home = () => {
  const products = useContext(ProductContext)

  return (
    <div>
      Home Page
    </div>
  )
}
