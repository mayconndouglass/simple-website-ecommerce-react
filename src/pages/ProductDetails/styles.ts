import styled from 'styled-components'

export const Loading = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SectionProduct = styled.section`
  padding: 8rem 0 3rem;
 
  
  @media (min-width: 1024px) {
    padding: 8rem 0;
    height: 100vh;
    display: flex;
    align-items: center;
 }
`

export const ContainerContent = styled.section`
  width: 80%;
  margin: 0 auto;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-bottom: 2rem;
  

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`

export const Image = styled.img`
  max-width: 200px;
    
  @media (min-width: 1024px) {
    max-width: 24rem;
  }
`

export const ContainerInfo = styled.div`
  flex: 1;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 8px;
    max-width: 450px;
    margin: 0 auto;

    @media (min-width: 1024px) {
      margin: 0;
    }
  }

  .price {
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: rgb(220 38 38);
    margin: 1.5rem 0;
    font-weight: 600;
  }

  p {
    margin-bottom: 2rem;
    text-align: justify;
    line-height: 1.5;
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    text-align: left;
  }
`

export const Button = styled.button`
  background-color: #404040;
  padding: 1rem 2rem;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: .3s;
  color: white;

  &:hover {
    transform: scale(1.1);
    transition: .3s;
  }
`
