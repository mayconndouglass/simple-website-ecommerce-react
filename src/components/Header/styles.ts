import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: #FBCFE8;
`

export const ContainerIcon = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  max-width: 50px;

  .bag {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

export const ContainerAmount = styled.div`
  background-color: #EF4444;
  position: absolute;
  right: -0.5rem;
  bottom: -0.5rem;
  font-size: 12px;
  width: 18px;
  height: 18px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
`
