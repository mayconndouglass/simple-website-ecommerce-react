import { Link } from 'react-router-dom'
// icons
import { BsPlus, BsEyeFill } from 'react-icons/bs'
// Styles
import { Container } from './styles'
// Contexts
import { useContext } from 'react'
import { ProductContext, ApiDataType } from '../../contexts/ProductContext'

type ProductType = {
  product: ApiDataType
}

export const Product = ({product}: ProductType) => {
  const { id, image, category, title, price } = product

  return <Container>{'...'}</Container>
}
