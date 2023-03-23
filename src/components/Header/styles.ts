import styled, { css } from 'styled-components'

type PropsHeader = {
  isActive: boolean
}

export const HeaderContainer = styled.div<PropsHeader>`
  width: 100%;
  position: fixed;
  z-index: 100;
  transition: all;
  
  ${props => (props.isActive ?
    css`
      background-color: white;
      padding: 16px 0;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    ` :
    css`
      background-color: none;
      padding: 24px 0;
    `
  )};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: auto;
  width: 100%;
  padding: 0.5rem 4rem;
`

export const CartContainer = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;

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

export const Logo = styled.img`
  width: 40px;
`
