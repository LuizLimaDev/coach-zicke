import imgCoach from "../assests/img/img-coach.png"
import imgBeneficios from "../assests/img/beneficios.jpg"
import { MainStyled, FaixaTitulo, ImgStyled, Section, TextField, SubTitle, List, ListItem } from '../components/Pages/Styled-components'
import { Container } from "../components/UI/index"

export default function Main() {
  return (
    <MainStyled>
      <FaixaTitulo>Coach Zicke</FaixaTitulo>

      <Section noAlign inlineBlock>
        <ImgStyled src={imgCoach} alt="Imagem do Coach" />

        <TextField>Atuante no cenário do CrossFit Bauruense <strong> desde 2012, </strong> traz uma grande bagagem de
          conhecimento não só do CrossFit, mas também das modalidades que envolve o Cross como: Ginástica
          Artística, Kettlebell trainning, Levantamento de peso olímpico e Mobilidade. Possui um diferencial em
          didática por trabalhar <strong> 8 anos na área escolar.</strong>
        </TextField>

        <TextField><em>Minha missão é: <strong>"Compartilhar todo meu conhecimento para que todos evoluam com menos
          sofrimento e mais ciência".</strong></em></TextField>

        <TextField>Oferecendo Cursos, Workshops, Clínicas, Capacitações, Aulas de personal e Tabelas de treinos. Busco
          elever o nível dos praticantes da modalidade com mais eficiência e menos tempo e sofrimento.</TextField>
      </Section>

      <Section className="mapa">
        <SubTitle className="titulo-principal">[ Local de treino ]</SubTitle>
        <TextField center>Fácil localização e acesso, próximo ao Vitória Régia.</TextField>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.660044428089!2d-49.06163442410073!3d-22.32869317966631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf6720cee6a8c7%3A0x7eec19d9fcbeedfe!2sAcademia%20Kia%20Kaha!5e0!3m2!1sen!2sbr!4v1682470252401!5m2!1sen!2sbr"
          width="100%"
          height="450"
          allowfullscreen=""
          title="Academia Kia Kaha"
          oading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </Section>

      <Section>
        <SubTitle className="titulo-principal">[ Diferencial ]</SubTitle>

        <Container flex className="beneficios">
          <List className="ul-beneficios">
            <ListItem className="itens">Avaliação física </ListItem>
            <ListItem className="itens">Ciclo desportivo</ListItem>
            <ListItem className="itens">Didática</ListItem>
            <ListItem className="itens">Técnica</ListItem>
            <ListItem className="itens">Ciência aplicada ao  treinamento</ListItem>
          </List>

          <ImgStyled src={imgBeneficios} alt="imagem beneficios" className="imgBeneficios" />
        </Container>
      </Section>

      <Section className="video">
        <iframe
          width="45%"
          height="315"
          src="https://www.youtube.com/embed/w0CjQiP1eQc"
          title="Clinica de Clean"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </Section>
    </MainStyled>
  )
}