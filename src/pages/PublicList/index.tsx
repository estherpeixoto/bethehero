import { Link } from 'react-router-dom'
import { PageHeader } from '@components/PageHeader'
import { Button } from '@components/Button'
import { Title } from '@components/Title'
import { List } from '@components/Cases/List'
import styles from './styles.module.css'

export function PublicList() {
  return (
    <div id={styles.List} className={styles.container}>
      <main>
        <PageHeader>
          <Link to="/sign-in">
            <Button style={{ width: 100 }}>Entrar</Button>
          </Link>
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
