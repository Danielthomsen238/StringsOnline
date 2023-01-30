import styled from "styled-components";

const StyledMainGrid = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  gap: 5px;
  grid-template-areas: "A B";

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
`;

export { StyledMainGrid };
