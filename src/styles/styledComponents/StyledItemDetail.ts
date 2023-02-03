import styled from "styled-components";

const StyledItemDetail = styled.section`
  display: flex;
  justify-content: space-between;
  border: solid 1px ${(props) => props.theme.colors.darkgrey};
  padding-right: 20px;
  min-height: 80vh;
  .image_wrapper {
    margin-top: 100px;
    width: 200px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 20px;
    img {
      background-color: white;
    }
    > :nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 200px;
      background-color: white;
      transform: rotate(-90deg);
    }
    > :nth-child(2) {
      margin-top: 100px;
    }
  }

  .info {
    width: 60%;
    color: white;
    > p {
      margin-bottom: 20px;
    }
    p {
      color: ${(props) => props.theme.colors.grey};
    }
  }
  .price {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    gap: 1rem;
    img {
      background-color: white;
    }
    p {
      align-self: flex-end;
      border: solid 1px ${(props) => props.theme.colors.darkgrey};
      padding: 5px 15px;
      border-radius: 5px;
    }
    .stock {
      border: none;
    }
    .input {
      display: flex;
      justify-content: space-around;
    }
    input {
      width: 20%;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 6%;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    button {
      background-color: ${(props) => props.theme.colors.purple};
      width: 70%;
      padding: 10px 0;
      color: ${(props) => props.theme.colors.white};
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export { StyledItemDetail };
