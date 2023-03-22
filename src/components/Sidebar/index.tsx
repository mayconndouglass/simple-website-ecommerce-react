import { useContext } from 'react'
import { Link } from "react-router-dom"

// styles
import { ContainerArea, ContainerICon, Container, Title } from './styles'

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
  const { cart, addToCart } = useContext(CartContext)
  
  return ( 
    <ContainerArea isOpen={isOpen}>
      <Container>
        <Title>Carrinho de Compras (0)</Title>
        <ContainerICon onClick={handleClose}>
          <IoMdArrowForward className='icon' />
        </ContainerICon>
      </Container>
        <div>
          {cart.map(item => {
            return <CartItem item={item} key={item.id} />
          })}
        </div>
    </ContainerArea>
  )
}
