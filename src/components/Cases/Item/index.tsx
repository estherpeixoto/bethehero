import { Case } from '@lib/entities'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

interface CaseItemProps {
  item: Case
  detailPage: boolean
}

export const Item = ({ item, detailPage }: CaseItemProps) => {
  const { id, title, description, organization, value } = item

  return (
    <div className={styles.card}>
      <main className={styles.container}>
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
      </main>

      {detailPage ? null : (
        <footer className={styles.cardFooter}>
          <Link to={`/case/${id}`} state={item}>
            Ver mais detalhes <FiArrowRight />
          </Link>
        </footer>
      )}
    </div>
  )
}
