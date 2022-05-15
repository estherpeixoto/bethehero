import { FormEvent, ChangeEvent, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { organizationService } from '@services/organization.services'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { Title } from '@components/Title'
import { Link } from '@components/Link'
import styles from './styles.module.css'
import { Success } from './Success'
import { Error } from './Error'

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
    <div id={styles.CreateAccount} className={styles.container}>
      <main style={{ height: typeof feedback === 'boolean' ? '100%' : 'auto' }}>
        {feedback === true ? (
          <Success />
        ) : feedback === false ? (
          <Error />
        ) : (
          <>
            <PageHeader>
              <Link to="/sign-in" style={{ padding: '10px' }}>
                <FiArrowLeft style={{ color: 'var(--color-red-hero)' }} />
              </Link>
            </PageHeader>

            <form onSubmit={handleSubmit} className={styles.form}>
              <Title>Cadastro</Title>

              <p className={styles.subtitle}>
                Faça seu cadastro, entre na plataforma e ajude pessoas a
                encontrarem os casos da sua ONG.
              </p>

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
            </form>
          </>
        )}
      </main>
    </div>
  )
}
