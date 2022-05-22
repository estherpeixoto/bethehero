import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  readonly primary?: boolean
}

export const ButtonIcon = (props: ButtonProps) => {
  return <ButtonIconStyled {...props} />
}

const ButtonIconStyled = styled.button<ButtonProps>`
  cursor: pointer;
  width: 60px;
  height: 60px;
  border: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: ${(props) =>
    props.primary ? 'var(--brand_hover)' : 'var(--stroke)'};
  color: ${(props) =>
    props.primary ? 'var(--text_on_brand)' : 'var(--brand)'};
  background-color: ${(props) =>
    props.primary ? 'var(--brand)' : 'var(--surface_primary)'};
`
