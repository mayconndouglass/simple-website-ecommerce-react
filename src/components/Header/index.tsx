import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Image
import logo from '../../assets/fashion.png'

// Contexts
import { SidebarContext } from '../../contexts/SidebarContext'
import { CartContext } from '../../contexts/CartContext'

// Styles
import {
  CartContainer,
  Container,
  ContainerAmount,
  Logo,
  HeaderContainer
} from './styles'

import { BsBag } from 'react-icons/bs'

export const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <HeaderContainer isActive={isActive}>
      <Container>
        <Link to={'/'}>
          <div>
            <Logo src={logo} alt='Roupas em um cabide'></Logo>
          </div>
        </Link>

        <CartContainer onClick={() => setIsOpen(!isOpen)}>
          <BsBag className='bagIcon' />

          <ContainerAmount>{itemAmount}</ContainerAmount>
        </CartContainer>
      </Container>
    </HeaderContainer>
  )
}
