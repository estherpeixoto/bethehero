import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'

export function Error() {
  return (
    <Container>
      <Subcontainer>
        <Span>
          <FiX strokeWidth={4} size={20} />
        </Span>
        <Title>
          Ops!
        </Title>
        <Paragraph>
          Houve um problema ao<br></br>cadastrar sua organização.<br></br>Tente novamente mais tarde.
        </Paragraph>
      </Subcontainer>
      <LinkStyled to='/'>Voltar para o início</LinkStyled>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  gap: 54px;
  
  @media(min-width: 1020px) {
    max-width: 300px; 
    margin: auto;
  }
`

const Subcontainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: url('/assets/images/Background.svg') no-repeat center;
  background-size: contain;
`

const Span = styled.span`
  border: 4px solid var(--color-red-hero);
  border-radius: 20px;
  color: var(--color-red-hero);
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  color: var(--color-primary-title);
`

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: var(--color-secondary-title);
`

const LinkStyled = styled(Link)`
  background: transparent;
  border: 2px solid var(--color-red-hero);
  box-shadow: none;
  border-radius: 0.44rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.16rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-red-hero);
  height: 50px;
  cursor: pointer;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  :hover {
    background: var(--color-red-hero);
    color: var(--color-background);
  }
`
