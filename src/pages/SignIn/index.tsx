import { FormEvent, useState } from 'react'
import { FiArrowLeft, FiLogIn } from 'react-icons/fi'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { Title } from '@components/Title'
import { Link } from '@components/Link'
import styles from './styles.module.css'
import { useAuth } from 'src/hooks/useAuth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const { signIn } = useAuth()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Set manually the organization credentials (temporarily)
    signIn({
      email,
    })
  }

  return (
    <div id={styles.SignIn} className={styles.container}>
      <main>
        <PageHeader>
          <Link to="/" style={{ padding: '10px' }}>
            <FiArrowLeft style={{ color: 'var(--color-red-hero)' }} />
          </Link>
        </PageHeader>

        <form onSubmit={handleSubmit} className={styles.form}>
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

          <Button type="submit">Entrar</Button>

          <Link to="/create-account">
            <FiLogIn />
            Não tenho cadastro
          </Link>
        </form>
      </main>
    </div>
  )
}
