import { useSwitch } from "../helpers/useSwitch";
import { StyledNav } from "../src/styles/styledComponents/StyledNav";
import Link from "next/link";

const Navbar = () => {
  const { toggle, switchToggle } = useSwitch();
  console.log(toggle);
  return (
    <StyledNav show={toggle}>
      <div className="burger" onClick={() => switchToggle()}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="menu">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </StyledNav>
  );
};

export default Navbar;
