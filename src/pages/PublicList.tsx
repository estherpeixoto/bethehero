import { Link } from 'react-router-dom'
import { PageHeader } from '@components/PageHeader'
import { Button } from '@components/Button'
import { Subtitle, Title } from '@components/Title'
import { List } from '@components/Cases/List'
import { DarkModeToggle } from '@components/DarkModeToggle'
import { Container, Main } from '@components/Layout'
import { PageHeaderButtons } from '@components/PageHeaderButtons'

export function PublicList() {
  return (
    <Container>
      <Main>
        <PageHeader>
          <PageHeaderButtons>
            <Link to="/sign-in">
              <Button style={{ width: 100 }}>Entrar</Button>
            </Link>
            <DarkModeToggle />
          </PageHeaderButtons>
        </PageHeader>

        <Title>Bem-vindo!</Title>

        <Subtitle>Escolha um dos casos abaixo e salve o dia.</Subtitle>

        <List />
      </Main>
    </Container>
  )
}
