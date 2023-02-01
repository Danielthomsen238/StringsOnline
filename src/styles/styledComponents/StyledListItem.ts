import styled from "styled-components";

const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 1px ${(props) => props.theme.colors.darkgrey};
  .info {
    margin-left: -50px;
    margin-top: 20px;
    width: 60%;
    h3 {
      color: ${(props) => props.theme.colors.white};
    }
    p {
      margin-top: 20px;
      color: ${(props) => props.theme.colors.grey};
    }
    a {
      color: ${(props) => props.theme.colors.interaction};
    }
  }

  .price {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-right: 20px;
    > :nth-child(1) {
      border: solid 1px ${(props) => props.theme.colors.darkgrey};
      padding: 10px 15px;
      border-radius: 5px;
    }
    p {
      color: ${(props) => props.theme.colors.white};
    }
    .stock {
      align-self: flex-end;
      font-size: 14px;
    }
    button {
      background-color: ${(props) => props.theme.colors.purple};
      width: 100%;
      padding: 10px 0;
      color: ${(props) => props.theme.colors.white};
      border: none;
      cursor: pointer;
    }
  }
  .image_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 205px;
    background-color: white;
    img {
      transform: rotate(-90deg);
    }
  }
`;

export { StyledListItem };
