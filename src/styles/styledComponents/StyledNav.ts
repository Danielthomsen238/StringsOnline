import styled from "styled-components";
import navBg from "../../images/header-bg.png";
import home_icon from "../../images/home-icon.png";
import email_icon from "../../images/mail-icon.png";
import phone_icon from "../../images/phone-icon.png";
import cart_icon from "../../images/cart-icon.png";
interface NavProps {
  show: boolean;
}
const StyledNav = styled.nav<NavProps>`
  position: relative;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  .menu {
    background-color: ${(props) => props.theme.colors.background};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url(${navBg.src});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 65vw;
    height: 10vw;
    .links {
      margin-right: 1%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 35vw;
      a {
        font-size: 1.5vw;
        color: ${(props) => props.theme.colors.white};
      }
      > :nth-child(3) {
        color: ${(props) => props.theme.colors.opale};
        padding: 0 15px;
        background-color: ${(props) => props.theme.colors.interaction};
        border-radius: 5px;
        border: solid ${(props) => props.theme.colors.border} 1px;
      }
    }
  }
  .search {
    display: flex;
    align-items: center;
    gap: 1rem;
    input {
      background-color: ${(props) => props.theme.colors.darkgreen};
      border: solid ${(props) => props.theme.colors.border} 1px;
      height: 3.2vw;
      width: 20vw;
      padding-left: 1vw;
      color: ${(props) => props.theme.colors.interaction};
      font-size: 1.5vw;
      border-radius: 5px;
      &::placeholder {
        color: ${(props) => props.theme.colors.interaction};
        font-size: 1.5vw;
      }
    }
    button {
      border: solid ${(props) => props.theme.colors.border} 1px;
      border-radius: 5px;
      width: 4vw;
      height: 3.2vw;
      background-color: ${(props) => props.theme.colors.interaction};
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 2vw;
      }
    }
  }
  .search_contact {
    margin-top: -2.8vw;
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 0.8vw;
    .contact {
      display: flex;
      justify-content: space-around;
      gap: 5px;
      .email {
        display: flex;
        align-items: center;
        gap: 5px;
        .email_icon {
          width: 1vw;
          height: 1vw;
          background-image: url(${email_icon.src});
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center;
        }
        p {
          font-size: 1vw;
          color: ${(props) => props.theme.colors.white};
        }
      }
      .phone {
        display: flex;
        align-items: center;
        gap: 5px;
        .phone_icon {
          width: 1vw;
          height: 1vw;
          background-image: url(${phone_icon.src});
          background-size: 45%;
          background-repeat: no-repeat;
          background-position: center;
        }
        p {
          font-size: 1vw;
          color: ${(props) => props.theme.colors.white};
        }
      }
      .basket {
        .basket_icon {
          width: 2vw;
          height: 2vw;
          background-image: url(${cart_icon.src});
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }
  }
  .burger {
    display: none;
  }
  @media all and (max-width: ${(props) => props.theme.breakpoints.xl}) {
  }
  @media all and (max-width: 375px) {
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
    .burger {
      height: 30px;
      width: 40px;
      position: absolute;
      top: 15px;
      left: 15px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      div {
        transition: ease-in-out 300ms;
        border-radius: 5px;
        width: 40px;
        height: 5px;
        background-color: ${(props) => props.theme.colors.white};
      }
      > :nth-child(1) {
        position: absolute;
        bottom: ${(props) => (props.show ? "10px" : "0px")};
        transform: ${(props) => (props.show ? "rotate(50deg)" : "rotate(0deg)")};
      }
      > :nth-child(2) {
        position: absolute;
        bottom: 10px;
        left: ${(props) => (props.show ? "-100px" : "0px")};
      }
      > :nth-child(3) {
        position: absolute;
        bottom: ${(props) => (props.show ? "10px" : "20px")};
        transform: ${(props) => (props.show ? "rotate(-50deg)" : "rotate(0deg)")};
      }
    }
  }
`;

const StyledBreadcrumbs = styled.div`
  width: 90vw;
  height: 1.8vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 5px;
  border-top: solid 1px ${(props) => props.theme.colors.darkgrey};
  border-bottom: solid 1px ${(props) => props.theme.colors.darkgrey};
  a {
    color: ${(props) => props.theme.colors.interaction};
  }
  ul {
    display: flex;
    gap: 5px;
  }
  span {
    color: ${(props) => props.theme.colors.white};
  }
  .home_icon {
    width: 1.5vw;
    height: 1.5vw;
    background-image: url(${home_icon.src});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export { StyledNav, StyledBreadcrumbs };
