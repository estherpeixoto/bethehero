import styles from './styles.module.css'
import { FiArrowRight } from 'react-icons/fi'

interface Case {
  id: number
  ong: string
  descricao: string
  valor: number
}

interface CaseItemProps {
  caseInfo: Case
}

export const Item: React.FunctionComponent<CaseItemProps> = ({ caseInfo }) => {
  const { id, descricao, ong, valor } = caseInfo

  return (
    <div className={styles.card}>
      <main className={styles.container}>
        <p>
          <strong>CASO:</strong> {descricao}
        </p>
        <p>
          <strong>ONG:</strong> {ong}
        </p>
        <p>
          <strong>VALOR:</strong> R${valor}
        </p>
      </main>

      <footer className={styles.cardFooter}>
        <a href={`/case/${id}`}>
          Ver mais detalhes <FiArrowRight />
        </a>
      </footer>
    </div>
  )
}
