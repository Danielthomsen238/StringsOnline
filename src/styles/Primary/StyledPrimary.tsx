import styled from "styled-components";
import { Global } from "../../../types/interfaces/StylesInterface";

export const StyledPrimary = styled.main<Global>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr) 3fr 2fr 2fr 2fr 1fr;
  gap: 5px;
  grid-template-areas:
    "A"
    "B"
    "D"
    "C"
    "E"
    "F"
    "G";

  @media all and (min-width: ${(props) => props.theme.breakpoints.m}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 6fr repeat(2, 1fr);
    grid-template-areas:
      "A A A A"
      "C D D D"
      "B B E E"
      "F F F F";
  }
  @media all and (min-width: ${(props) => props.theme.breakpoints.l}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 3fr 3fr 2fr 1fr;
    grid-template-areas:
      "A A A A"
      "B B B B"
      "C D D D"
      "C E E E"
      "C F F G";
  }
  @media all and (min-width: ${(props) => props.theme.breakpoints.xl}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 4fr 1fr 1fr 1fr;
    grid-template-areas:
      "B A A A"
      "C C C C"
      "E E . D"
      "E E . G"
      "F F F F";
  }
  > :nth-child(1) {
    grid-area: A;
    background-color: ${(props) => props.theme.colors.darkBackground};
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }
  > :nth-child(2) {
    grid-area: B;
    background-color: ${(props) => props.theme.colors.darkBackground};
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }
  > :nth-child(3) {
    grid-area: C;
    background-color: ${(props) => props.theme.colors.darkBackground};
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }
  > :nth-child(4) {
    grid-area: D;
    background-color: ${(props) => props.theme.colors.darkBackground};
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }
  > :nth-child(5) {
    grid-area: E;
    background-color: ${(props) => props.theme.colors.darkBackground};
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }
  > :nth-child(6) {
    grid-area: F;
    background-color: ${(props) => props.theme.colors.darkBackground};
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }
  > :nth-child(7) {
    grid-area: G;
    background-color: ${(props) => props.theme.colors.darkBackground};
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }
`;
