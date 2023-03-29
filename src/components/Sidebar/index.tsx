import { useContext } from 'react'
import { Link } from "react-router-dom"

// styles
import {
  ContainerArea,
  ContainerICon,
  Container,
  Title,
  ContainerClearIcon,
  ContainerTotal,
  SectionTotal,
  Total,
  ContainerItems
} from './styles'

// Icons
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'

// Component
import { CartItem } from '../CartItem'

// Context
import { SidebarContext } from "../../contexts/SidebarContext"
import { CartContext } from '../../contexts/CartContext'

export const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, clearCart, total, itemAmount } = useContext(CartContext)
  
  return (
    <ContainerArea isOpen={isOpen}>
      <Container>
        <Title>Carrinho de Compras ({itemAmount})</Title>

        <ContainerICon onClick={handleClose}>
          <IoMdArrowForward className='icon' />
        </ContainerICon>
      </Container>

        <ContainerItems>
          {cart.map(item => {
            return <CartItem item={item} key={item.id} />
          })}
        </ContainerItems>
        
        <SectionTotal>
          <ContainerTotal>
            <Total>
              <span>Total:</span>R$ {total}
            </Total>

            <ContainerClearIcon onClick={clearCart}>
              <FiTrash2 />
            </ContainerClearIcon>
          </ContainerTotal>

          <Link to={'/'} className='viewCart'>Visualizar Carrinho</Link>
          <Link to={'/'} className='checkout'>Conferir Carrinho</Link>
        </SectionTotal>
    </ContainerArea>
  )
}
