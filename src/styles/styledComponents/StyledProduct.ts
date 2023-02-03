import styled from "styled-components";

const StyledProduct = styled.div`
  position: relative;
  width: 35vw;
  height: 401px;
  display: flex;
  border: solid 1px ${(props) => props.theme.colors.darkgrey};

  .image_wrapper {
    position: absolute;
    top: 100px;
    left: -100px;
    background-color: white;
    width: 400px;
    height: 200px;
    transform: rotate(-90deg);
  }
  .product_info {
    position: absolute;
    left: 220px;
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 22px;
      color: ${(props) => props.theme.colors.white};
    }
    p {
      font-size: 18px;
      color: ${(props) => props.theme.colors.grey};
      a {
        color: ${(props) => props.theme.colors.interaction};
      }
    }
    .price {
      margin: 0 auto;
      margin-bottom: -20px;
      width: 75%;
      display: flex;
      align-items: center;
      padding-left: 10px;
      justify-content: space-between;
      border: solid 1px ${(props) => props.theme.colors.darkgrey};
      border-radius: 5px;
      overflow: hidden;
      p {
        color: ${(props) => props.theme.colors.white};
      }
      button {
        background-color: ${(props) => props.theme.colors.purple};
        padding: 10px 10px;
        color: ${(props) => props.theme.colors.white};
        border: none;
        cursor: pointer;
      }
    }
  }
`;

export { StyledProduct };
