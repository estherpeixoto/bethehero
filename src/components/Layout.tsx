import styled from 'styled-components'

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>
}

const ContainerStyled = styled.div`
  height: 100vh;
  width: 100vw;
`

const Main = styled.main`
  padding: 24px;
`

export { Container, Main }
