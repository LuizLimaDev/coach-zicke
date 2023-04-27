import styled from "styled-components"
import { colorBlack, colorWhite } from "../variables"

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FaixaTitulo = styled.h1`
  width: 100%;
  margin: 1rem;

  font-size: 28px;
  color: ${colorWhite};
  text-align: center;

  background-color: ${colorBlack};
`

export const ImgStyled = styled.img`
  width: 7.5rem;
  float: left;
  
  margin: 0 2rem 1.25rem 0;
  border-radius: 20px;
  opacity: 0.8;
  box-shadow: 7px 7px 5px lightgrey;

  &.imgBeneficios{
    width: 15%;
    opacity: 0.5;
    border-radius: 20px;
    transition: 1.5s;
    box-shadow: 10px 10px 5px 0 lightgrey;
  }
`

export const Section = styled.section`
  display: ${(props) => props.inlineBlock ? 'inline-block' : 'flex'};
  flex-direction: column;
  align-items: ${(props) => props.noAlign ? '' : 'center'};

  padding: 1.25rem 1rem 1.25rem 1rem;
  width: 100%;
`

export const TextField = styled.p`
  margin: 0 0 1rem;

  font-size: 1.25rem;
  text-align: ${(props) => props.center ? 'center' : 'justify'};
  font-weight: ${(props) => props.fontWeight};
`

export const SubTitle = styled.h3`
  text-align: center;
  font-size: 2em;
  margin: 0 0 1em;
  clear: left;

  &:first-letter{
    font-size: 2.5rem;
  }
`

export const List = styled.ul`
  display: inline-block;

  width: 25%;
`

export const ListItem = styled.li`
  line-height: 2.8;
  font-style: italic;
  text-align: left;
  
  &::before {
    content: "★ ";
  }
`