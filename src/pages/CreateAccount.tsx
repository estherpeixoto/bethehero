import { FormEvent, ChangeEvent, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { organizationService } from '@services/organization.services'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { Title } from '@components/Title'
import { Link } from '@components/Link'
import { Container, Main } from '@components/Layout'
import { Success } from './Success'
import { Error } from './Error'
import styled from 'styled-components'
import { ButtonIcon } from '@components/ButtonIcon'
import { DarkModeToggle } from '@components/DarkModeToggle'

export function CreateAccount() {
  const [feedback, setFeedback] = useState<boolean | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    organizationService
      .add({
        name,
        email,
        phone,
        city,
        state,
      })
      .then(() => setFeedback(true))
      .catch(() => setFeedback(false))
  }

  return (
    <Container>
      <Main style={{ height: typeof feedback === 'boolean' ? '100%' : 'auto' }}>
        {feedback === true ? (
          <Success />
        ) : feedback === false ? (
          <Error />
        ) : (
          <>
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
                Faça seu cadastro, entre na plataforma e ajude pessoas a
                encontrarem os casos da sua ONG.
              </Subtitle>

              <Input
                label="Nome da ONG"
                name="name"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                value={name}
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
                label="WhatsApp"
                name="phone"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
                value={phone}
              />

              <Input
                label="Cidade"
                name="city"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCity(e.target.value)
                }
                value={city}
              />

              <Input
                label="UF"
                name="state"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setState(e.target.value)
                }
                value={state}
                maxLength="2"
              />

              <Button
                type="submit"
                disabled={
                  name == '' ||
                  email == '' ||
                  phone == '' ||
                  city == '' ||
                  state == ''
                    ? true
                    : false
                }
              >
                Cadastrar
              </Button>
            </Form>
          </>
        )}
      </Main>
    </Container>
  )
}

const Form = styled.form`
  div,
  button {
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
