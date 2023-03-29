import { useContext } from 'react'
import { useParams } from 'react-router-dom'

// Styles
import {
  Loading,
  SectionProduct,
  ContainerContent,
  Content,
  ContainerImg,
  ContainerInfo,
  Image,
  Button,
} from './styles'

// Contexts
import { CartContext } from '../../contexts/CartContext'
import { ProductContext } from '../../contexts/ProductContext'

export const ProductDetails = () => {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)
  const products  = useContext(ProductContext)
  
  const product = products.find(product => product.id === Number(id))

  if (product === undefined) {
    return (
      <>
        {!product && (
          <Loading>
            Loading...
          </Loading>
        )}
      </>
    )
  }

  const { title, price, description, image } = product

  return (
    <SectionProduct>
      <ContainerContent>
        <Content>
          <ContainerImg>
            <Image src={image} alt="" />
          </ContainerImg>

          <ContainerInfo>
            <h1>{title}</h1>
            <div className='price'>R$ {price}</div>
            <p>{description}</p>
            
            <Button onClick={() => addToCart(product, product.id)}>
              Adicionar ao Carrinho
            </Button>
          </ContainerInfo>
        </Content>
      </ContainerContent>
    </SectionProduct>
  )
}
