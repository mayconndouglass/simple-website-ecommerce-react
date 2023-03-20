import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 4px;
  /* position: relative; */
  border: 1px solid #e4e4e4;
  transition: all;
`

export const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all;
  position: relative;
  overflow: hidden;

  a {
    color: rgb(55 65 81);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 2.75rem;
    height: 2.75rem;
    filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  }

  &:hover {
    & > .containerImg {
      transform: scale(1.1);
    }

    & > .containerButton {
      opacity: 1;
      transition-duration: 300ms;
      top: 6px;
      right: 8px;
    }
  }
`

export const ContainerImg = styled.div`
  width: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  max-height: 160px;
  transition-duration: 300ms;
  cursor: pointer;
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  transition-duration: 300ms;

  position: absolute;
  top: 6px;
  right: -20px;
  padding: 8px;
  opacity: 0;

  button {
    display: block;
    background-color: white;
    font-size: 1.25rem;
    line-height: 1.75rem;
    border: none;
    outline: none;
    cursor: pointer;
  }
`

export const ContainerICon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 2.75rem;
  height: 2.755rem;
  background-color: #DC2626;
`

export const Description = styled.div`
  margin-top: 4px;

  a {
    text-decoration: none;
    color: #404040;

    h2 {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 4px;
    }
  }  
`

export const Category = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: capitalize;
  color: rgb(107 114 128);
  margin-bottom: 4px;
`

export const Price = styled.div`
  color: #2e2e2e;
  font-weight: 600;

  h2 {
    margin: 0;
    font-size: 1rem;
  }
`
