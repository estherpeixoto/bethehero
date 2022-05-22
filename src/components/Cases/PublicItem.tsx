import { Case } from '@lib/entities'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface PublicItemProps {
  item: Case
  detailPage: boolean
}

const PublicItem = ({ item, detailPage }: PublicItemProps) => {
  const { id, title, description, organization, value } = item

  return (
    <CardStyled>
      <ContainerStyled>
        <p>
          <strong>CASO:</strong> {title}
        </p>

        <p>
          <strong>ONG:</strong> {organization.name}
        </p>

        {detailPage ? (
          <p>
            <strong>DESCRIÇÃO:</strong> {description}
          </p>
        ) : null}

        <p>
          <strong>VALOR:</strong>{' '}
          {value.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </ContainerStyled>

      {detailPage ? null : (
        <CardFooterStyled>
          <Link to={`/case/${id}`} state={item}>
            Ver mais detalhes <FiArrowRight />
          </Link>
        </CardFooterStyled>
      )}
    </CardStyled>
  )
}

const CardStyled = styled.div`
  background: var(--surface_secondary);
  border-radius: 8px;
  overflow: hidden;
`

const ContainerStyled = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: var(--text_secondary);

  strong {
    color: var(--text_primary);
  }
`
const CardFooterStyled = styled.footer`
  height: 64px;
  position: relative;
  border-top: 1px solid var(--stroke);

  a {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px;
    color: var(--brand);
    text-decoration: none;
  }

  a:hover {
    color: var(--brand_hover);
  }
`

export { PublicItem, CardStyled, ContainerStyled }
