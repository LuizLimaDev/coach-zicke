import styled from "styled-components"
import { colorBlack, colorBlue, colorGreen, colorRed, colorYellow } from "../variables"
import { Link } from "react-router-dom"

const UlNavbar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  text-transform: uppercase;

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${colorBlack};
  }

  .menuhome a:hover {
    color: ${colorGreen};
  }

  .menuprodutos a:hover {
    color: ${colorYellow};
  }

  .menucontatos a:hover {
    color: ${colorBlue};
  }

  .menuo_coach a:hover {
    color: ${colorRed};
  }
`
export default function Navbar() {
  return (
    <nav>
      <UlNavbar>
        <Link to={'/'}><li class="menuhome"><a href="./index.html">Home</a></li></Link>
        <Link to={'/servicos'}><li class="menuprodutos"><a href="./produtos.html">Serviços</a></li></Link>
        <Link to={'/contato'}><li class="menucontatos"><a href="./contato.html">Contato</a></li></Link>
        <Link to={'/coach'}><li class="menuo_coach"><a href="./o_coach.html">Coach</a></li></Link>
      </UlNavbar>
    </nav>
  )
}