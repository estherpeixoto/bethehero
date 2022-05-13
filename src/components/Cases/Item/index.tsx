import { Case } from '@lib/entities'
import { FiArrowRight } from 'react-icons/fi'
import styles from './styles.module.css'

interface CaseItemProps {
  item: Case
}

export const Item: React.FC<CaseItemProps> = ({ item }) => {
  const { id, descricao, ong, valor } = item

  return (
    <div className={styles.card}>
      <main className={styles.container}>
        <p>
          <strong>CASO:</strong> {descricao}
        </p>
        <p>
          <strong>ONG:</strong> {ong.nome}
        </p>
        <p>
          <strong>VALOR:</strong> {valor.toLocaleString('pt-br',{ style: 'currency', currency: 'BRL' })}
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
