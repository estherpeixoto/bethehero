import styled from 'styled-components'
import { Button } from '@components/Button'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { FiPlus } from 'react-icons/fi'
import { ButtonIcon } from '@components/ButtonIcon'
import { useNavigate } from 'react-router-dom'

export const AddCaseButton = () => {
  const navigate = useNavigate()
  let isPageWide = useMediaQuery('(min-width: 1024px)')

  const redirect = () => {
    navigate('/case/create')
  }

  return isPageWide ? (
    <AddCaseButtonStyled onClick={redirect}>
      Cadastrar novo caso
    </AddCaseButtonStyled>
  ) : (
    <ButtonIcon onClick={redirect} primary>
      <FiPlus size={24} />
    </ButtonIcon>
  )
}

const AddCaseButtonStyled = styled(Button)`
  @media (min-width: 1024px) {
    width: 262px;
  }
`
