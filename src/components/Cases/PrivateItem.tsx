import { Case } from '@lib/entities'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import styled from 'styled-components'

type PrivateItemProps = {
  item: Case
  key: string
}

export function PrivateItem({ item }: PrivateItemProps) {
  const { id, title, description, organization, value } = item

  const formattedValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <Card>
      <Container>
        <ButtonsContainer>
          <Button>
            <FiEdit size={24} />
          </Button>
          <Button>
            <FiTrash2 size={24} />
          </Button>
        </ButtonsContainer>

        <p>
          <strong>CASO:</strong>
          <br></br>
          {title}
        </p>

        <p>
          <strong>DESCRIÇÃO:</strong>
          <br></br>
          {description}
        </p>

        <p>
          <strong>VALOR:</strong>
          <br></br>
          {formattedValue}
        </p>
      </Container>
    </Card>
  )
}

const Card = styled.div`
  background: var(--surface_secondary);
  border-radius: 8px;
  overflow: hidden;
`

const Container = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: var(--text_secondary);
  position: relative;

  strong {
    color: var(--text_primary);
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  right: 20px;
`

const Button = styled.button`
  transition: all 0.2s;
  color: var(--text_secondary);
  background-color: transparent;
  cursor: pointer;

  :hover {
    color: var(--brand_hover);
  }
`
