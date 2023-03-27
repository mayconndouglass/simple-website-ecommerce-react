import styled from "styled-components";

export const BackgroundHero = styled.section`
  height: 800px;
  background-size: cover;
  width: 100%;
  background-color: #F5E6E0;
  padding-top: 6rem; /* 96px */
  padding-bottom: 6rem; /* 96px */
`

export const ContainerHeroContent = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  max-width: auto;
  height: 100%;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  h1 {
    font-size: 4.4rem;
    line-height: 1.1;
    font-weight: 300;
    margin-bottom: 1rem;

    .span {
      font-weight: 600;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  }

  @media (max-width: 470px) {
    margin-bottom: 0;

    h1 {
      font-size: 3rem;
    }
  }
`

export const ContainerTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .containerSubtitle {
    display: flex;
    align-items: center;
    font-weight: 600;
    text-transform: uppercase;

    .subtitle {
      width: 2.5rem;
      height: 2px;
      background-color: red;
      margin-right: 8px;
    }
  }
  
  a {
    align-self: flex-start;
    text-transform: uppercase;
    font-weight: 600;
    border: 0px solid #404040;
    border-bottom-width: 2px;
  }
`

export const ContainerImage = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`
