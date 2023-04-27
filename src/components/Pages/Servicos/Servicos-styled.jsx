import styled from "styled-components"

export const ServicosImg = styled.img`
  width: 70%;
  height: 50%;
  margin-bottom: 1rem;
`

export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  padding: 0 0 1.875rem;
`

export const ListaServicos = styled.ul`
  width: 59rem;
  margin: 0 auto;
  padding: 3rem 0;  
`

export const ItemLista = styled.li`
  display: inline-block;

  vertical-align: top;
  max-width: 30%;
  height: 25rem;
  padding: 1.875rem 1.25rem;
  margin: 0 .75rem 6rem;
  border: 2px solid #000000;
  border-radius: .625rem;

  text-align: center;

  &:hover {
    border-color: lightgray;
  }
`