import styled from 'styled-components'

interface statusSideBar {
  isOpen: boolean
}

export const ContainerArea = styled.div<statusSideBar>`
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  right: ${props => (props.isOpen ? '0' : '-100%')};

  transition: all;
  transition-duration: 300ms;

  height: 100%;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  padding: 0 35px;

  @media (min-width: 768px) {
    width: 35vw;
  }

 /*  @media (min-width: 1024px) { 
    
  } */

  @media (min-width: 1440px) { 
    max-width: 30vw;
    
    z-index: 20;
    padding: 0 16px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem 0; 
  border-bottom: 1px solid #9c9c9c;
`

export const Title = styled.div`
  color: #595959;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.25rem;
`

export const ContainerICon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  
  .icon {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`
