import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

type ButtonProps = ComponentPropsWithoutRef<'button'>

export const Button = (props: ButtonProps) => {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  background: var(--color-red-hero);
  box-shadow: none;
  border-radius: 0.44rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.16rem;
  text-align: center;
  color: var(--color-background);
  height: 60px;
  cursor: pointer;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  :hover {
    box-shadow: 0 0 0 2px rgb(224 32 65 / 50%);
  }

  :disabled {
    opacity: 50%;
    cursor: not-allowed;

    :hover {
      box-shadow: none;
    }
  }
`
