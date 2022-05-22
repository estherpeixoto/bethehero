import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import styled from 'styled-components'

export function Success() {
  return (
    <Container>
      <Subcontainer>
        <Span>
          <FiCheck strokeWidth={4} size={20} />
        </Span>
        <Title>
          Cadastro<br></br>concluído!
        </Title>
        <Paragraph>
          Agora você faz parte da<br></br>plataforma do Be The Hero.
        </Paragraph>
      </Subcontainer>
      <LinkStyled to='/sign-in'>Entrar na plataforma</LinkStyled>
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
  max-width: 300px;
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
  border: 4px solid var(--brand);
  border-radius: 20px;
  color: var(--brand);
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
  color: var(--text_primary);
`

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: var(--text_secondary);
`

const LinkStyled = styled(Link)`
  background: var(--brand);
  box-shadow: none;
  border-radius: 0.44rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.16rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text_primary);
  height: 50px;
  cursor: pointer;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  :hover {
    box-shadow: 0 0 0 2px rgb(224 32 65 / 50%);
  }
`
