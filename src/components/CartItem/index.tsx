import { Link } from 'react-router-dom'
import { useContext } from 'react'

// Types
import { ApiDataType } from "../../types/productData.type"

// Styles
import {
  Image, 
  ContainerArea,
  Container,
  ContainerTitle,
  IconClose,
  Title,
  ContainerInf,
  Quantity,
  Price,
  PriceFinal,
} from './styles'

// Icons
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io'

// Contexts
import { CartContext } from '../../contexts/CartContext'

type CartPropsType = {
  item: ApiDataType
}

export const CartItem = ({ item }: CartPropsType) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)
  
  const { id, title, image, price, amount } = item
  const priceFinal = parseFloat((price * amount!).toString()).toFixed(2)

  return(
    <ContainerArea>
      <Container>
        <Link to={`/product/${id}`}>
          <Image src={image}/>
        </Link>
      </Container>

      <ContainerTitle>
        <Title>
          <Link to={`/product/${id}`}>
            {title}
          </Link>

          <IconClose onClick={() => removeFromCart(id)}>
            <IoMdClose className='iconClose'/>
          </IconClose>
        </Title>

        <ContainerInf> 
          <Quantity>
            <div onClick={() => decreaseAmount(id)} className='removeIcon'>
              <IoMdRemove />
            </div>

            <div className='amount'>{amount}</div>

            <div onClick={() => increaseAmount(id)} className='addIcon'>
              <IoMdAdd />
            </div>

          </Quantity>
          
          <Price>
            R$ {price}
          </Price>

          <PriceFinal>
            {`R$ ${priceFinal}`}
          </PriceFinal>
        </ContainerInf>
        
      </ContainerTitle>
    </ContainerArea>
  ) 
}
