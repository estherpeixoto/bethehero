import { FormEvent, ChangeEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import styled from 'styled-components'
import { useAuth } from '@hooks/useAuth'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { Title } from '@components/Title'
import { Link } from '@components/Link'
import { Container, Main } from '@components/Layout'
import { ButtonIcon } from '@components/ButtonIcon'
import { DarkModeToggle } from '@components/DarkModeToggle'

export function SignUp() {
  const navigation = useNavigate()
  const { signUp } = useAuth()

  const [isValid, setIsValid] = useState<boolean>(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  // Form validation
  useEffect(() => {
    if (
      name.trim() !== '' &&
      state.trim() !== '' &&
      city.trim() !== '' &&
      phone.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== ''
    ) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [name, email, password, phone, city, state])

  // Form event
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const isRegistered = await signUp({
      name,
      email,
      password,
      phone,
      city,
      state,
    })

    if (isRegistered) {
      alert('Bem vindo!')
      navigation('/')
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
          <Title>Cadastro</Title>

          <Subtitle>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </Subtitle>

          <Input
            label="Nome da ONG"
            name="name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            value={name}
          />

          <InputGroup>
            <Input
              label="UF"
              name="state"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setState(e.target.value)
              }
              value={state}
              maxLength="2"
            />

            <Input
              label="Cidade"
              name="city"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCity(e.target.value)
              }
              value={city}
            />
          </InputGroup>

          <Input
            label="WhatsApp"
            name="phone"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            value={phone}
          />

          <Input
            label="E-mail"
            name="email"
            type="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            value={email}
          />

          <Input
            label="Senha"
            name="password"
            type="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            value={password}
          />

          <Button type="submit" disabled={!isValid}>
            Cadastrar
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

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: var(--text_secondary);
  margin-bottom: 38px;
`

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 1rem;
`
