import { Container } from '@components/Layout'
import { FiLoader } from 'react-icons/fi'
import styled from 'styled-components'

export const LoadingScreen = () => {
  return (
    <Container>
      <StyledSubcontainer>
        <StyledLoaderIcon size={24} color="#fff" />
      </StyledSubcontainer>
    </Container>
  )
}

const StyledSubcontainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLoaderIcon = styled(FiLoader)`
  animation: spin infinite 5s linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
