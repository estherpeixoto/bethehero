import styled from 'styled-components'

export const Hello = ({ organizationName }) => {
  return <HelloStyled>Olá, {organizationName}</HelloStyled>
}

const HelloStyled = styled.p`
  display: none;

  @media (min-width: 1024px) {
    display: inline;
    width: 300px;
    overflow: hidden;
    white-space: nowrap;
    color: var(--text_secondary);
  }
`
