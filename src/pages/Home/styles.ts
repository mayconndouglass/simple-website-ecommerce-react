import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 4rem;
`

export const ProductContainer = styled.section`
  width: 100%;
  margin: 0 auto;
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  gap: 30px;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
  }

  @media (max-width: 1048px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
`
