import styled from 'styled-components'

export const ContainerArea = styled.div`
  display: flex;
  gap: 20px;
  padding: 8px 0;

  @media (min-width: 1024px) {
    padding: 0 24px;
    border-bottom: solid 1px #E2E8F0;
    width: 100%;
    font-weight: 300;
    color: #64748B;
  }
`

export const Container = styled.div`
  width: 80px;
  min-height: 150px;
  display: flex;
  align-items: center;
  column-gap: 1rem;
`

export const Image = styled.img`
  max-width: 80px;
`

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #2e2e2e;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans';

  a {
    max-width: 240px;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const IconClose = styled.div`
  color: rgb(100 116 139);
  cursor: pointer;
  transition: all;
  font-size: 1.25rem;
  line-height: 1.75rem;

  &:hover {
    color: rgb(239 68 68);
  }
`

export const ContainerInf = styled.div`
  display: flex;
  gap: 8px;
  height: 30px;
  font-size: 0.875rem;
  line-height: 1.25rem;
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  height: 100%;
  max-width: 64px;
  border: solid 1px #9c9c9c;
  color: #404040;
  font-size : 14px;
  justify-content: center;
  padding: 0 4px;

  .removeIcon, .addIcon {
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: flex;
  }

  .remoIcon {
    flex: 1 1 0%;
  }

  /* .addIcon {
    height: 100%;
  } */

  .amount {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
  }
`

export const Price = styled.div`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  justify-content: space-around;
  color: #717171;
`

export const PriceFinal = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: end;
  align-items: center;
  color: #404040;
  font-size: 14px;
`