import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiLogIn } from 'react-icons/fi'
import { useAuth } from '@hooks/useAuth'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { OAuthButton } from '@components/OAuthButton'
import { PageHeader } from '@components/PageHeader'
import { Title } from '@components/Title'
import { Link } from '@components/Link'
import { DarkModeToggle } from '@components/DarkModeToggle'
import { ButtonIcon } from '@components/ButtonIcon'
import { Container } from '@components/Layout'
import styled from 'styled-components'

export function SignIn() {
  const [email, setEmail] = useState('')
  const { signIn, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const status = await signIn(email)

    if (status) {
      navigate('/')
    }
  }

  const handleSignInWithGoogle = async () => {
    const status = await signInWithGoogle()

    if (status) {
      navigate('/')
    }
  }

  return (
    <Container>
      <MainStyled>
        <PageHeader showLogo={false}>
          <Link to="/">
            <ButtonIcon>
              <FiArrowLeft size={24} />
            </ButtonIcon>
          </Link>
          <DarkModeToggle />
        </PageHeader>

        <form onSubmit={handleSubmit}>
          <Title>Faça seu logon</Title>

          <Input
            label="Seu e-mail"
            name="email"
            value={email}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />

          <Button type="submit">Continuar</Button>

          <OAuthButton type="button" onClick={handleSignInWithGoogle} />

          <Link to="/create-account">
            <FiLogIn />
            Não tenho cadastro
          </Link>
        </form>
      </MainStyled>
    </Container>
  )
}

const MainStyled = styled.main`
  padding: 24px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15.6px;

    a {
      margin-top: 40px;
      display: flex;
      align-items: center;
      gap: 19px;

      svg {
        color: var(--brand);
      }
    }
  }
`
