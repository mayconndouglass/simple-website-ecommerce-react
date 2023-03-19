// Styles
import { HomeContainer, ProductContainer, ProductGrid } from './styles'

// Contexts
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

// Components
import { Product } from '../../components/Product'

export const Home = () => {
  const products = useContext(ProductContext)
  // get only clothing category
  const filteredProducts = products.filter(({ category }) =>
    category === "men's clothing" || category === "women's clothing")
  
  return (
    <HomeContainer>
      <ProductContainer>
        <ProductGrid>
          {filteredProducts.map(product => {
            return <Product product={product} key={product.id} />
          })}
        </ProductGrid>
      </ProductContainer>
    </HomeContainer>
  )
}
