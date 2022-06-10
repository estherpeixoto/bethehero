import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import { useAuth } from '@hooks/useAuth'
import { Case } from '@lib/entities'
import { caseService } from '@services/case.services'
import { PageHeader } from '@components/PageHeader'
import { Title } from '@components/Title'
import { Loading } from '@components/Loading'
import { PrivateItem } from '@components/Cases/PrivateItem'
import { ButtonIcon } from '@components/ButtonIcon'
import { DarkModeToggle } from '@components/DarkModeToggle'
import { PageHeaderButtons } from '@components/PageHeaderButtons'
import { Hello } from '@components/PrivateList/Hello'
import { HeaderContent } from '@components/PrivateList/HeaderContent'
import { AddCaseButton } from '@components/PrivateList/AddCaseButton'
import { Container, Main } from '@components/Layout'
import styled from 'styled-components'
import { EmptyState } from '@components/Feedback/EmptyState'

export function PrivateList() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [cases, setCases] = useState<Array<Case>>([])

  const { user, signout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    fetchCases()
  }, [])

  const fetchCases = async () => {
    setIsLoading(true)

    const data = await caseService.findAllByOrganization({
      id: user.uid,
      name: user.displayName,
      email: user.email,
      phone: user.phoneNumber,
      city: null,
      state: null,
    })

    setCases(data)

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  const handleSignOut = () => {
    if (signout()) {
      navigate('/')
    }
  }

  return (
    <Container>
      <Main>
        <PageHeader>
          <HeaderContent>
            <Hello organizationName={user.displayName} />

            <PageHeaderButtons>
              <AddCaseButton />

              <DarkModeToggle />

              <ButtonIcon onClick={handleSignOut}>
                <FiPower size={24} />
              </ButtonIcon>
            </PageHeaderButtons>
          </HeaderContent>
        </PageHeader>

        <Title>Casos cadastrados</Title>

        <Grid>
          {isLoading ? (
            <Loading />
          ) : cases.length > 0 ? (
            cases.map((item) => {
              return <PrivateItem item={item} key={item.id} />
            })
          ) : (
            <EmptyState />
          )}
        </Grid>
      </Main>
    </Container>
  )
}

const Grid = styled.div`
  padding-top: 19px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`
