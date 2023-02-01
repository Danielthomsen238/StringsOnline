import styled from "styled-components";

const StyledLogin = styled.form`
  margin-left: 3vw;
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
  h1 {
    font-weight: 1;
  }
  p {
    font-weight: bold;
    margin-bottom: 10px;
  }
  label {
    color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;

    input {
      margin-top: 5px;
      width: 15vw;
      height: 2.2vw;
      background-color: ${(props) => props.theme.colors.darkgreen};
      border: solid 1px ${(props) => props.theme.colors.border};
      color: ${(props) => props.theme.colors.interaction};
      border-radius: 5px;
    }
  }
  button {
    margin-top: 10px;
    width: 8vw;
    height: 1.8vw;
    background-color: ${(props) => props.theme.colors.interaction};
    color: ${(props) => props.theme.colors.darkgreen};
    border: solid 1px ${(props) => props.theme.colors.border};
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export { StyledLogin };
