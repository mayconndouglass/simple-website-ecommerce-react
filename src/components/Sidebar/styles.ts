import styled from 'styled-components'

interface statusSideBar {
  isOpen: boolean
}

export const Container = styled.div<statusSideBar>`
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  right: ${props => (props.isOpen ? '0' : '100%')};

  height: 100%;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  @media (min-width: 768px) {
    max-width: 35vw;
  }

  @media (min-width: 1280px) { 
    padding: 0 35px;
  }

  @media (min-width: 1280px) { 
    max-width: 30vw;
    transition: all;
    transition-duration: 300ms;
    z-index: 20;
    padding: 0 16px;
  }
`
