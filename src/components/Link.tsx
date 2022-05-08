import { Link as RouterLink, LinkProps } from 'react-router-dom'
import styled from 'styled-components'

export const Link = ({ to, children, ...props }: LinkProps) => {
  return (
    <RouterLinkStyled to={to} {...props}>
      {children}
    </RouterLinkStyled>
  )
}

const RouterLinkStyled = styled(RouterLink)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #41414d;
  text-decoration: none;
`
