import { useSwitch } from "../helpers/useSwitch";
import { StyledBreadcrumbs, StyledNav } from "../src/styles/styledComponents/StyledNav";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSearch, StoreState } from "../helpers/useSearch";

interface Breadcrumbs {
  breadcrumb: string;
  href: string;
}

const convertBreadcrumb = (string: any) => {
  let capitalized = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalized.replace(/-/g, " ").replace(/oe/g, "ö").replace(/ae/g, "ä").replace(/ue/g, "ü");
};

const Navbar = () => {
  const { searchString, setSearchString } = useSearch() as StoreState;
  const { toggle, switchToggle } = useSwitch();
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumbs[]>();

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path.replace(/_/g, " "), href: "/" + linkPath.slice(0, i + 1).join("/") };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);
  console.log(searchString);
  return (
    <>
      <div>
        <StyledNav show={toggle}>
          <div className="burger" onClick={() => switchToggle()}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="menu">
            <div className="links">
              <Link href="/">Forside</Link>
              <Link href="/salgs">Salgs- og handelbetingelser</Link>
              <Link href="/login">Login</Link>
            </div>
          </div>
          <div className="search_contact">
            <div className="contact">
              <div className="email">
                <div className="email_icon" />
                <p>sales@stringsonline.com</p>
              </div>
              <div className="phone">
                <div className="phone_icon" />
                <p>+45 98 12 22 68</p>
              </div>
              <div className="basket">
                <div className="basket_icon" />
              </div>
            </div>
            <div className="search">
              <input type="text" placeholder="Indtast søgeord" value={searchString} onChange={(event) => setSearchString(event.target.value)} />
              <button onClick={() => router.push("/")}>
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </StyledNav>
        <StyledBreadcrumbs>
          <div className="home_icon" />
          <ul>
            <li>
              <Link href="/">Forside</Link>
            </li>
            {breadcrumbs &&
              breadcrumbs.map((breadcrumb, i) => {
                return (
                  <li key={breadcrumb.href}>
                    <span>\</span> <Link href={breadcrumb.href}>{convertBreadcrumb(breadcrumb.breadcrumb)}</Link>
                  </li>
                );
              })}
          </ul>
        </StyledBreadcrumbs>
      </div>
    </>
  );
};

export { Navbar };
