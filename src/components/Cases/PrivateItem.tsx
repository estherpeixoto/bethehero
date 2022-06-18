import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { Case } from '@lib/entities'

type PrivateItemProps = {
  item: Case
  deleteCase: (id: string) => Promise<void>
  key: string
}

export function PrivateItem({ item, deleteCase }: PrivateItemProps) {
  const { id, title, description, organization, value } = item

  const formattedValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  const navigate = useNavigate()

  return (
    <StyledCard>
      <StyledContainer>
        <StyledActions>
          <StyledButton
            onClick={() => {
              navigate(`/case/${id}/edit`, {
                state: item,
              })
            }}
          >
            <FiEdit size={24} />
          </StyledButton>

          <StyledButton
            onClick={() => {
              deleteCase(item.id)
            }}
          >
            <FiTrash2 size={24} />
          </StyledButton>
        </StyledActions>

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
      </StyledContainer>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  background: var(--surface_secondary);
  border-radius: 8px;
  overflow: hidden;
`

const StyledContainer = styled.main`
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

const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: absolute;
  right: 20px;
`

const StyledButton = styled.button`
  transition: all 0.2s;
  color: var(--text_secondary);
  background-color: transparent;
  cursor: pointer;

  :hover {
    color: var(--brand_hover);
  }
`
