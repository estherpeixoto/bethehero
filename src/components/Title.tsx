import React from 'react'
import styled from 'styled-components'

interface TitleProps {
  children?: React.ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return <H1Styled>{children}</H1Styled>
}

const H1Styled = styled.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  color: #13131a;
  margin-bottom: 16px;
`
