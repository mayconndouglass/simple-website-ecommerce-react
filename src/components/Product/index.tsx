import { Link } from 'react-router-dom'
import { useContext } from 'react'

// Styles
import {
  Container,
  ProductContainer,
  ContainerImg,
  Image,
  Description,
  ContainerButton,
  ContainerICon,
  Category,
  Price
} from './styles'

// Contexts
import { CartContext } from '../../contexts/CartContext'

// icons
import { BsPlus, BsEyeFill } from 'react-icons/bs'

// Type
import { ApiDataType } from '../../types/productData.type'

type ProductType = {
  product: ApiDataType
}

export const Product = ({product}: ProductType) => {
  const { addToCart } = useContext(CartContext)
  const { id, image, category, title, price } = product
  
  return (
    <div>
      <Container>
        <ProductContainer>
          <ContainerImg className='containerImg'>
            <Image src={image} alt=''/>
          </ContainerImg>

          <ContainerButton className='containerButton'>
            <button onClick={() => addToCart(product, id)}>
              <ContainerICon>
                <BsPlus />
              </ContainerICon>
            </button>
          
            <Link to={`/product/${id}`}>
              <BsEyeFill />
            </Link>
          </ContainerButton>
        </ProductContainer>
      </Container>
      
      <Description>
        <Category>
          {category}
        </Category>
  
        <Link to={`/product/${id}`}>
          <h2>{title}</h2>
        </Link>

        <Price>
         <h2>{`R$ ${price.toLocaleString('PT')}`}</h2>
        </Price>
      </Description>
    </div>
  ) 
}
