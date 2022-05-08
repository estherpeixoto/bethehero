import { Item } from '@components/Cases/Item'
import styles from './styles.module.css'

const cases = [
  {
    id: 1,
    ong: 'APAD',
    descricao: 'Cadelinha atropelada 1',
    valor: 120
  },
  {
    id: 2,
    ong: 'APAD',
    descricao: 'Cadelinha atropelada 2',
    valor: 120
  },
  {
    id: 3,
    ong: 'APAD',
    descricao: 'Cadelinha atropelada 3',
    valor: 120
  },
  {
    id: 4,
    ong: 'APAD',
    descricao: 'Cadelinha atropelada 4',
    valor: 120
  },
]

export function List() {
  return (
    <div className={styles.container}>
      {cases.map((item) => {
        return <Item caseInfo={item} key={item.id} />
      })}
    </div>
  )
}
