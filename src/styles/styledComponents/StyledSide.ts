import styled from "styled-components";

const StyledSide = styled.aside`
  background-color: ${(props) => props.theme.colors.darkgreen};
  height: fit-content;
  color: ${(props) => props.theme.colors.interaction};
  border: solid 1px ${(props) => props.theme.colors.border};
  padding: 10px 20px;
  ul {
    li {
      cursor: pointer;
      a {
        color: ${(props) => props.theme.colors.interaction};
      }
    }
    ul {
      margin-left: 20px;
    }
  }
  .activ {
    color: ${(props) => props.theme.colors.white};
  }
`;

export { StyledSide };
