import {useState, Dispatch, SetStateAction, createContext} from 'react'

// Type
import { ChildrenPropsType } from '../types/children.type'

type SidebarContextType = {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  handleClose: () => void,
}

const initialState = {
  isOpen: false,
  setIsOpen: () => {},
  handleClose: () => {},
}

export const SidebarContext = createContext<SidebarContextType>(initialState)

export const SidebarProvider = ({children}: ChildrenPropsType) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClose = () => {
    setIsOpen(false)
  }

  return(
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  ) 
}
