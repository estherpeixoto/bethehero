import { ReactNode } from 'react'
import styled from 'styled-components'
import { Link } from './Link'

interface PageHeaderProps {
  children?: ReactNode
}

export const PageHeader = ({ children }: PageHeaderProps) => {
  return (
    <DivStyled>
      <Link to="/">
        <ImageStyled src="/assets/images/Logo.svg" alt="Be The Hero" />
      </Link>
      {children}
    </DivStyled>
  )
}

const DivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`

const ImageStyled = styled.img`
  width: 94.12px;
  height: auto;
`
