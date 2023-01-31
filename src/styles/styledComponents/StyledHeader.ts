import styled from "styled-components";
import headerBg from "../../images/hero-banner.png";

const StyledHeader = styled.header`
  width: 100%;
  height: 25vw;
  background-image: url(${headerBg.src});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export { StyledHeader };
