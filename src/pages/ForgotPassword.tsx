import { FormEvent, ChangeEvent, useState, useEffect } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import styled from 'styled-components'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { Title } from '@components/Title'
import { Link } from '@components/Link'
import { Container, Main } from '@components/Layout'
import { ButtonIcon } from '@components/ButtonIcon'
import { DarkModeToggle } from '@components/DarkModeToggle'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@lib/firebase'

export function ForgotPassword() {
  const [isValid, setIsValid] = useState<boolean>(false)
  const [email, setEmail] = useState('')

  // Form validation
  useEffect(() => {
    if (email.trim() !== '') {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [email])

  // Form event
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (isValid) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('E-mail enviado!')
        })
        .catch((error) => {
          throw error
        })
    }
  }

  // Form
  return (
    <Container>
      <Main>
        <PageHeader showLogo={false}>
          <Link to="/sign-in">
            <ButtonIcon>
              <FiArrowLeft size={24} />
            </ButtonIcon>
          </Link>
          <DarkModeToggle />
        </PageHeader>

        <Form onSubmit={handleSubmit}>
          <Title>Esqueceu a senha?</Title>

          <Input
            label="E-mail"
            name="email"
            type="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            value={email}
          />

          <Button type="submit" disabled={!isValid}>
            Enviar e-mail
          </Button>
        </Form>
      </Main>
    </Container>
  )
}

const Form = styled.form`
  > * {
    display: block;
    width: 100%;
  }
`
