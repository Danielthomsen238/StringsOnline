import styled from "styled-components";
import footerBg from "../../images/footer.png";

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.darkgrey};
  background-image: url(${footerBg.src});
  background-size: 30%;
  background-position: center;
  background-repeat: no-repeat;
`;

export { StyledFooter };
