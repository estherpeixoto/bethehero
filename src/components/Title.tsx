import { ReactNode } from 'react'
import styled from 'styled-components'

type TitleProps = {
  children: ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <H1Styled>{children}</H1Styled>
}

const Subtitle = ({ children }: TitleProps) => {
  return <SubtitleStyled>{children}</SubtitleStyled>
}

export { Title, Subtitle }

const H1Styled = styled.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  color: var(--text_primary);
  margin-bottom: 16px;
`

const SubtitleStyled = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: var(--text_secondary);
  margin-bottom: 38px;
`
