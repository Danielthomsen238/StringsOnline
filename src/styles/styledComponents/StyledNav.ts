import styled from "styled-components";
interface NavProps {
  show: boolean;
}
const StyledNav = styled.nav<NavProps>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 30px;
  background-color: lightgray;
  .menu {
    display: flex;
    justify-content: space-evenly;
    width: 300px;
  }

  @media all and (min-width: 375px) {
    display: flex;
    justify-content: flex-start;
    .menu {
      transition: 400ms ease-in-out;
      position: absolute;
      top: 30px;
      display: flex;
      height: ${(props) => (props.show ? "50px" : "0px")};
      flex-direction: column;
      width: 100%;
      background-color: lightgray;
      overflow: hidden;
    }
  }
`;

export { StyledNav };
