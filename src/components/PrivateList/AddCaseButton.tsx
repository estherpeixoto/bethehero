import styled from 'styled-components'
import { Button } from '@components/Button'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { FiPlus } from 'react-icons/fi'
import { ButtonIcon } from '@components/ButtonIcon'

export const AddCaseButton = () => {
  let isPageWide = useMediaQuery('(min-width: 1024px)')

  return isPageWide ? (
    <AddCaseButtonStyled>Cadastrar novo caso</AddCaseButtonStyled>
  ) : (
    <ButtonIcon primary>
      <FiPlus size={24} />
    </ButtonIcon>
  )
}

const AddCaseButtonStyled = styled(Button)`
  @media (min-width: 1024px) {
    width: 262px;
  }
`
