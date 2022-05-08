import { useState } from 'react'
import { FiArrowLeft, FiLogIn } from 'react-icons/fi'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { Title } from '@components/Title'
import { Link } from '@components/Link'
import styles from './styles.module.css'

export function SignIn() {
  const [nome, setNome] = useState('')

  return (
    <div id={styles.SignIn} className={styles.container}>
      <main>
        <PageHeader>
          <Link to="/" style={{ padding: '10px' }}>
            <FiArrowLeft style={{ color: 'var(--color-red-hero)' }} />
          </Link>
        </PageHeader>

        <form className={styles.form}>
          <Title>Faça seu logon</Title>

          <Input
            label="Sua ID"
            name="id"
            value={nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
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
