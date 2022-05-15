import { ReactNode } from 'react'
import styled from 'styled-components'

type TitleProps = {
  children: ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return <H1Styled>{children}</H1Styled>
}

const H1Styled = styled.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  color: var(--color-primary-title);
  margin-bottom: 16px;
`
