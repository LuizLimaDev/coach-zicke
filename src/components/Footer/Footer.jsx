import styled from 'styled-components'
import logo from '../../assests/img/bannerwhite.png'
import backgroundImg from '../../assests/img/bg.jpg'
import { ImgLogo } from '../UI'

const FooterStyled = styled.footer`
  background: url(${backgroundImg});
  padding: .5rem;
  color: white;
  text-align: center;
`

export const TextField = styled.p`
  margin: 1rem;

  font-size: 1rem;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterStyled>
      <ImgLogo src={logo} class="bannerwhite" alt="Logo Coach Zicke" />
      <TextField>&copy;Copyrigth Coach Zicke - Since 2012</TextField>
    </FooterStyled>
  )
}