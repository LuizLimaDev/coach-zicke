import logo from '../../assests/img/banner.png'
import styled from 'styled-components';
import { ImgLogo } from '../UI';
import Navbar from '../Navbar/Navbar'
import backgroundImg from '../../assests/img/bgtop.png'

const HeaderHTML = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.25rem 1.5rem;

  background-image: url(${backgroundImg});
`

export default function Header() {
  return (
    <HeaderHTML>
      <ImgLogo src={logo} class="banner" alt="Logo Coach Zicke" />

      <Navbar />
    </HeaderHTML>
  )
}