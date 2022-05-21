import { useNavigate } from 'react-router-dom'
import { PageHeader } from '@components/PageHeader'
import { Button } from '@components/Button'
import { Title } from '@components/Title'
import { List } from '@components/Cases/List'
import styles from './styles.module.css'
import { useAuth } from 'src/hooks/useAuth'
import { FiPower } from 'react-icons/fi'

export function PrivateList() {
  const { organization, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    const status = await signOut()

    if (status) {
      navigate('/')
    }
  }

  return (
    <div id={styles.List} className={styles.container}>
      <main>
        <PageHeader>
          <div
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 48,
            }}
          >
            <p>Bem vinda, {organization.name}</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
              }}
            >
              <Button style={{ width: 262 }}>Cadastrar novo caso</Button>
              <button
                style={{
                  width: 60,
                  height: 60,
                  border: 1,
                  borderStyle: 'solid',
                  borderColor: 'var(--color-border)',
                  borderRadius: 8,
                  color: 'var(--color-red-hero)',
                  cursor: 'pointer',
                }}
                onClick={handleSignOut}
              >
                <FiPower size={24} />
              </button>
            </div>
          </div>
        </PageHeader>

        <Title>Bem-vindo!</Title>

        <p className={styles.subtitle}>
          Escolha um dos casos abaixo e salve o dia.
        </p>

        <List />
      </main>
    </div>
  )
}
