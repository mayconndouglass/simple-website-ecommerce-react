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
  z-index: 500;

  @media (min-width: 768px) {
    width: 35vw;
  }


  @media (min-width: 1440px) { 
    max-width: 30vw;
    
    z-index: 500;
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

export const ContainerClearIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  background-color: #DC2626;
  color: white;
  width: 2rem;
  height: 2rem;
  font-size: 1.25rem; 
  line-height: 1.75rem;
`

export const ContainerTotal = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const SectionTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  padding: 16px 0;
  margin-top: 1rem;

  .viewCart, .checkout {
    background-color: #D1D5DB;
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #2e2e2e;
    width: 100%;
    font-weight: 500;
  }

  .checkout {
    background-color: #404040;
    color: white;
  }
`

export const Total = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  span {
    margin-right: 8px;
  }
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  height: 520px;
  overflow-y: auto;
  overflow-x: hidden;
  border-bottom: 1px solid #CCC;

  @media (min-width: 1024px) {
    height: 640px;
  }
`
