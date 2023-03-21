import { useContext } from 'react'
import { SidebarContext } from '../../contexts/SidebarContext'

import { BsBag } from 'react-icons/bs'

export const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)

  return ( 
    <div>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <BsBag />
      </div>
    </div>
  )
}
