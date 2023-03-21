import { useContext } from 'react'
import { Link } from "react-router-dom"

// styles
import { Container } from './styles'

// Icons
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'

// Component
import { CartItem } from '../CartItem'

// Context
import { SidebarContext } from "../../contexts/SidebarContext"

export const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)

  return <Container isOpen={isOpen}>Sidebar</Container>
}
