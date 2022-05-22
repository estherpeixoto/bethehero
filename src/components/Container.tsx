import styled from 'styled-components'

export const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>
}

const ContainerStyled = styled.div`
  height: 100vh;
  width: 100vw;
`
