import { useContext } from 'react'
import { SidebarContext } from '../../contexts/SidebarContext'

// Styles
import { ContainerIcon, HeaderContainer } from './styles'

import { BsBag } from 'react-icons/bs'

export const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)

  return ( 
    <HeaderContainer>
      <div>Header</div>
      <ContainerIcon onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='bagIcon' />
      </ContainerIcon>
    </HeaderContainer>
  )
}
