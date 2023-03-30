import { BackgroundHero, ContainerHeroContent, ContainerImage, ContainerTitleContent } from './styles'
import { Link } from 'react-router-dom'

// Images
import Model from '../../assets/model.webp'

export const Hero = () => {
  return (
    <BackgroundHero >
      <ContainerHeroContent>
        <ContainerTitleContent>
          <div className='containerSubtitle'>
            <div className='subtitle'></div>Tendências
          </div>

          <h1>
            Faça das nossas roupas a sua personalidade<br />
          </h1>
          
          <Link to={'/'}>
            Leia Mais
          </Link>
        </ContainerTitleContent>
        

        <ContainerImage>
          <img src={Model} alt="" width={'300px'}/>
        </ContainerImage>
      </ContainerHeroContent>
    </BackgroundHero>
  )
}
