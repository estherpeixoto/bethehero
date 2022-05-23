import { useLocation } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Case } from '@lib/entities'
import { PageHeader } from '@components/PageHeader'
import { Link } from '@components/Link'
import {
  CardStyled,
  ContainerStyled,
  PublicItem,
} from '@components/Cases/PublicItem'
import { Button } from '@components/Button'
import { Container, Main } from '@components/Layout'
import styled from 'styled-components'
import { ButtonIcon } from '@components/ButtonIcon'
import { DarkModeToggle } from '@components/DarkModeToggle'

export function Show() {
  const { state } = useLocation()
  const { id, title, description, organization, value } = state as Case

  const whatsAppMessage = `Olá! Quero ajudar com o caso "${description}".`
  const whatsAppLink = `https://wa.me/${organization.phone}/?text=${whatsAppMessage}`
  const emailLink = `mailto:${organization.email}`

  return (
    <Container>
      <Main>
        <PageHeader showLogo={false}>
          <Link to="/">
            <ButtonIcon>
              <FiArrowLeft size={24} />
            </ButtonIcon>
          </Link>
          <DarkModeToggle />
        </PageHeader>

        <form>
          <PublicItem
            detailPage={true}
            item={{ id, title, description, organization, value }}
            key={id}
          />

          <ContactCard>
            <CardStyled>
              <ContainerStyled>
                <SaveTheDay>
                  Salve o dia!<br></br>Seja o herói desse caso.
                </SaveTheDay>

                <Contact>Entre em contato:</Contact>

                <ButtonsContainer>
                  <Button
                    type="button"
                    onClick={() => window.open(whatsAppLink, '_blank')}
                  >
                    WhatsApp
                  </Button>

                  <Button
                    type="button"
                    onClick={() => window.open(emailLink, '_blank')}
                  >
                    E-mail
                  </Button>
                </ButtonsContainer>
              </ContainerStyled>
            </CardStyled>
          </ContactCard>
        </form>
      </Main>
    </Container>
  )
}

const ContactCard = styled.div`
  margin-top: 16px;

  main {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

const SaveTheDay = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: var(--text_primary);
`

const Contact = styled.p`
  font-size: 15px;
  line-height: 20px;
  color: var(--text_secondary);
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 17px;

  button {
    flex-grow: 1;
  }
`
