import { Link } from 'react-router-dom'

// Types
import { ApiDataType } from "../../types/productData.type"

// Styles
import { Image, ContainerArea } from './styles'

type CartPropsType = {
  item: ApiDataType
}

export const CartItem = ({ item }: CartPropsType) => {
  const { id, title, image, price, amount } = item

  return(
    <ContainerArea>
      <Link to={`/product/${id}`}>
        <Image src={image}/>
      </Link>
    </ContainerArea>
  ) 
}
