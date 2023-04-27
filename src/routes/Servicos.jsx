import personalImg from '../assests/img/personal_pb.png'
import cursosImg from '../assests/img/cursos_pb.png'
import clinicasImg from '../assests/img/clinica_pb.png'
import styled from 'styled-components'
import { TextField, MainStyled, FaixaTitulo } from '../components/Pages/Styled-components'
import { ServicosImg, SubTitle, ListaServicos, ItemLista } from '../components/Pages/Servicos/Servicos-styled'

const MainServicos = styled(MainStyled)`
  justify-content: space-between;

  height: 73vh;
`

export default function Servicos() {
  return (
    <MainServicos>
      <FaixaTitulo>Serviços</FaixaTitulo>

      <ListaServicos class="produtos">
        <ItemLista>
          <SubTitle>Personal</SubTitle>
          <ServicosImg src={personalImg} alt="imagem personal" class="ilustracao" />
          <TextField class="descricao">Treino com variáveis controladas e resultado garantido!</TextField>
        </ItemLista>

        <ItemLista>
          <SubTitle>Cursos</SubTitle>
          <ServicosImg src={cursosImg} alt="imagem cursos" class="ilustracao" />
          <TextField class="descricao">Capacitações de profissionais da área.</TextField>
        </ItemLista>

        <ItemLista>
          <SubTitle>Clínicas</SubTitle>
          <ServicosImg src={clinicasImg} alt="imagem clinicas" class="ilustracao" />
          <TextField class="descricao">Aula teórica e técnica de diversas modalidades do CrossFit</TextField>
        </ItemLista>
      </ListaServicos>
    </MainServicos>
  )
}