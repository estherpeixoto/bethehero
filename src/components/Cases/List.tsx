import { useEffect, useState } from 'react'
import { Case } from '@lib/entities'
import { caseService } from '@services/case.services'
import { Loading } from '@components/Loading'
import { PublicItem } from '@components/Cases/PublicItem'
import styled from 'styled-components'

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
    <ListStyled>
      {isLoading ? (
        <Loading />
      ) : (
        cases.map((item) => {
          return <PublicItem detailPage={false} item={item} key={item.id} />
        })
      )}
    </ListStyled>
  )
}

const ListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`
