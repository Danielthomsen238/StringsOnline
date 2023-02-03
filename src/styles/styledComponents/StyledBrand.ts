import styled from "styled-components";

const StyledBrand = styled.section`
  display: flex;
  gap: 2rem;
  border: solid 1px ${(props) => props.theme.colors.darkgrey};
  margin-bottom: 20px;
  padding-right: 20px;
  .info {
    margin-top: 20px;
    color: ${(props) => props.theme.colors.white};
    h1 {
      font-size: 25px;
      margin-bottom: 20px;
    }
    p {
      color: ${(props) => props.theme.colors.grey};
    }
    margin-bottom: 20px;
  }
  .image_wrapper {
    background-color: white;
    width: fit-content;
    height: fit-content;
  }
`;

export { StyledBrand };
