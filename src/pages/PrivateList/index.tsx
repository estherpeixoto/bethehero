import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'
import { Case } from '@lib/entities'
import { caseService } from '@services/case.services'
import { PageHeader } from '@components/PageHeader'
import { Button } from '@components/Button'
import { Title } from '@components/Title'
import { Loading } from '@components/Loading'
import { PrivateItem } from '@components/Cases/PrivateItem'
import { FiPower } from 'react-icons/fi'
import styles from './styles.module.css'

export function PrivateList() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [cases, setCases] = useState<Array<Case>>([])

  const { organization, signOut } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    fetchCases()
  }, [])

  const fetchCases = async () => {
    setIsLoading(true)

    const data = await caseService.findAllByOrganization(organization)
    setCases(data)

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  const handleSignOut = () => {
    if (signOut()) {
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

        <Title>Casos cadastrados</Title>

        <div className={styles.container}>
          {isLoading ? (
            <Loading />
          ) : (
            cases.map((item) => {
              return <PrivateItem item={item} key={item.id} />
            })
          )}
        </div>
      </main>
    </div>
  )
}
