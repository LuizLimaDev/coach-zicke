import styled from "styled-components"
import { colorLightGray } from "../variables"

export const ImgLogo = styled.img`
  width: 10rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flex ? 'flex' : 'column'};
  justify-content: center;
  gap: 1rem;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  background-color: ${colorLightGray};
`
