import styled from "styled-components";

const StyledHome = styled.section`
  .h1 {
    display: flex;
    font-size: 28px;
    color: ${(props) => props.theme.colors.grey};
    margin-bottom: 20px;
    h1 {
      margin-left: 5px;
      font-size: 28px;
    }
    p {
      color: ${(props) => props.theme.colors.grey};
    }
  }
  section {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export { StyledHome };
