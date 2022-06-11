import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { caseService } from '@services/case.services'
import { Case } from '@lib/entities'
import { PageHeader } from '@components/PageHeader'
import { Button } from '@components/Button'
import { Subtitle, Title } from '@components/Title'
import { Loading } from '@components/Loading'
import { PublicItem } from '@components/Cases/PublicItem'
import { DarkModeToggle } from '@components/DarkModeToggle'
import { Container, Main } from '@components/Layout'
import { PageHeaderButtons } from '@components/PageHeaderButtons'

export function PublicList() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [cases, setCases] = useState<Array<Case>>([])

  useEffect(() => {
    fetchCases()
  }, [])

  const fetchCases = async () => {
    setIsLoading(true)

    const data = await caseService.findAll()
    setCases(data)

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

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

        <ListStyled>
          {isLoading ? (
            <Loading />
          ) : (
            cases.map((item) => {
              return <PublicItem detailPage={false} item={item} key={item.id} />
            })
          )}
        </ListStyled>
      </Main>
    </Container>
  )
}

const ListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`
