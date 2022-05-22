import { useState, useEffect } from 'react'
import styled from 'styled-components'

type InputProps = {
  label: string
  name: string
  value: string
  [key: string]: any
}

export const Input = ({ label, name, value, ...rest }: InputProps) => {
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    if (value === '') {
      setFocused(false)
    } else {
      setFocused(true)
    }
  }, [value])

  return (
    <InputContainer>
      <InputStyled {...rest} name={name} title={label} value={value} />

      <LabelStyled className={focused ? 'filled' : ''} htmlFor={name}>
        {label}
      </LabelStyled>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .filled {
    transform: translate(0, 12px) scale(0.8);
  }
`

const InputStyled = styled.input`
  background: var(--surface_secondary);
  border: 1.5px solid var(--stroke);
  box-sizing: border-box;
  border-radius: 0.44rem;
  padding: 15px 15px 0;
  height: 60px;
  margin-bottom: 15.9px;
  width: 100%;
  color: var(--text_primary);
  outline: none;
  box-shadow: none;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  :focus {
    box-shadow: 0 0 0 2px var(--surface_secondary_hover);
  }
`

const LabelStyled = styled.label`
  position: absolute;
  pointer-events: none;
  transform: translate(0, 20px) scale(1);
  transform-origin: top left;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  font-weight: 400;
  font-size: 18px;
  color: var(--text_secondary);
  line-height: 1;
  left: 16px;

  &:focus-within {
    transform: translate(0, 12px) scale(0.8);
    color: var(--brand);
  }
`
