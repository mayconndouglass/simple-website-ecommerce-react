import { useContext } from 'react'

// Contexts
import { SidebarContext } from '../../contexts/SidebarContext'
import { CartContext } from '../../contexts/CartContext'

// Styles
import { ContainerIcon, HeaderContainer, ContainerAmount } from './styles'

import { BsBag } from 'react-icons/bs'

export const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  return ( 
    <HeaderContainer>
      <div>Header</div>
      <ContainerIcon onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='bagIcon' />

        <ContainerAmount>{itemAmount}</ContainerAmount>
      </ContainerIcon>
    </HeaderContainer>
  )
}
