import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  fullWidth?: boolean
}

export const Button = (props: ButtonProps) => {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button.attrs((props: ButtonProps) => props)`
  background: var(--brand);
  box-shadow: none;
  border-radius: 0.44rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.16rem;
  text-align: center;
  color: var(--text_on_brand);
  height: 60px;
  cursor: pointer;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  ${(props) => (props.fullWidth ? 'width: 100%;' : '')};

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
