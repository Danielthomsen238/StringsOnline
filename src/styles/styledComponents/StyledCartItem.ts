import styled from "styled-components";

const StyledCartItem = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  border: solid 1px ${(props) => props.theme.colors.darkgrey};
  .image_wrapper {
    margin-left: -25px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 150px;
    background-color: white;
    transform: rotate(-90deg);
  }
  h2 {
    color: white;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }
  .input_wrapper {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    input {
      padding-left: 15px;
      width: 40px;
      height: 40px;
      background-color: ${(props) => props.theme.colors.interaction};
      color: ${(props) => props.theme.colors.darkgreen};
      border: solid 1px ${(props) => props.theme.colors.darkgreen};
    }
    .input {
      border-radius: 5px;
      overflow: hidden;
    }
    button {
      width: 40px;
      height: 40px;
      background-color: ${(props) => props.theme.colors.interaction};
      color: ${(props) => props.theme.colors.darkgreen};
      border: solid 1px ${(props) => props.theme.colors.darkgreen};
    }
  }
`;

export { StyledCartItem };
