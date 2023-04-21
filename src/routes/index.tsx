/* pages */
import { Home } from '../pages/Home'
import { ProductDetails } from '../pages/ProductDetails'

import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>
  )
}
