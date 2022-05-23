import { Link } from 'react-router-dom'
import { PageHeader } from '@components/PageHeader'
import { Button } from '@components/Button'
import { Title } from '@components/Title'
import { List } from '@components/Cases/List'
import { DarkModeToggle } from '@components/DarkModeToggle'
import { Container, Main } from '@components/Layout'
import { PageHeaderButtons } from '@components/PageHeaderButtons'
import styled from 'styled-components'

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

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: var(--text_secondary);
  margin-bottom: 38px;
`
