import { useEffect, useState } from 'react'
import { Case } from '@lib/entities'
import { caseService } from '@services/case.services'
import { Item } from '@components/Cases/Item'
import { Loading } from '@components/Loading'
import styles from './styles.module.css'

export function List() {
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
    <div className={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        cases.map((item) => {
          return <Item item={item} key={item.id} />
        })
      )}
    </div>
  )
}
