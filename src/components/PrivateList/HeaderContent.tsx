import styled from 'styled-components'

export const HeaderContent = ({ children }) => {
  return <HeaderContentStyled>{children}</HeaderContentStyled>
}

const HeaderContentStyled = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: center;
  margin-left: 48px;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`
