import styled from 'styled-components'
import { FcGoogle } from 'react-icons/fc'
import { ButtonProps } from './Button'

export const OAuthButton = (props: ButtonProps) => {
  return (
    <OAuthButtonStyled {...props}>
      <FcGoogle size={24} />
      <p style={{ marginBottom: -2 }}>Continuar com o Google</p>
    </OAuthButtonStyled>
  )
}

const OAuthButtonStyled = styled.button.attrs((props: ButtonProps) => props)`
  ${(props) => (props.fullWidth ? 'width: 100%;' : '')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background: var(--oauth_button_background);
  color: var(--oauth_button_color);
  border: 1px solid var(--oauth_button_border);
  box-shadow: none;
  border-radius: 0.44rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.16rem;
  text-align: center;
  height: 60px;
  cursor: pointer;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  :hover {
    box-shadow: 0 0 0 2px var(--oauth_button_boxShadow);
  }

  :disabled {
    opacity: 50%;
    cursor: not-allowed;

    :hover {
      box-shadow: none;
    }
  }
`
