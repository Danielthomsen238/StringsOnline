import styled from "styled-components";

const StyledProduct = styled.div`
  width: 550px;
  height: 600px;
  display: flex;
  border: solid 1px ${(props) => props.theme.colors.grey};

  .image_wrapper {
    background-color: red;
    width: 25%;
    height: 550px;
    transform: rotate(-90deg);
  }
  .product_info {
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      color: ${(props) => props.theme.colors.white};
    }
    p {
      color: ${(props) => props.theme.colors.grey};
      a {
        color: ${(props) => props.theme.colors.interaction};
      }
    }
  }
`;

export { StyledProduct };
