import { StyledSide } from "../src/styles/styledComponents/StyledSide";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledMainGrid } from "../src/styles/Primary/StyledMainGrid";
import { Categorie } from "../types/interfaces/DataInterface";
import Link from "next/link";

const StyledMain = ({ children }: any) => {
  const [categories, getCategories] = useState<Categorie[]>();
  const [active, setActive] = useState<string>("");
  const [showCategorie, setShowCategorie] = useState<any>();
  const [brands, getBrands] = useState<any[]>();

  useEffect(() => {
    axios
      .get("https://api.mediehuset.net/stringsonline/productgroups")
      .then((response) => {
        getCategories(response.data.items);
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .get("https://api.mediehuset.net/stringsonline/brands")
      .then((response) => {
        getBrands(response.data.items);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <StyledMainGrid>
      <StyledSide>
        <ul>
          {categories &&
            categories.map((parentItem, idx) => {
              return (
                <React.Fragment key={parentItem.title}>
                  <li
                    className={active == parentItem.title ? "activ" : ""}
                    onClick={() => {
                      setActive(parentItem.title);
                      setShowCategorie(parentItem.id);
                    }}
                  >
                    {/* <Link className={active == parentItem.title ? "activ" : ""} href={`/${parentItem.title.replace(/ /g, "_").toLocaleLowerCase()}`}>
                      {parentItem.title}
                    </Link> */}
                    {parentItem.title}
                  </li>
                  {showCategorie == parentItem.id ? (
                    <ul>
                      {categories[idx].subgroups.map((item, idx) => {
                        return (
                          <li key={item.title} onClick={() => setActive(item.title)} className={active == item.title ? "activ" : ""}>
                            <Link
                              className={active == item.title ? "activ" : ""}
                              href={`/${parentItem.title.replace(/ /g, "_").toLocaleLowerCase()}/${item.title.replace(/ /g, "_").toLocaleLowerCase()}`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </React.Fragment>
              );
            })}
          <li
            className={active == "Brands" ? "activ" : ""}
            onClick={() => {
              setActive("Brands");
              setShowCategorie("Brands");
            }}
          >
            Brands
          </li>
          <ul>
            {showCategorie == "Brands"
              ? brands &&
                brands.map((item, idx) => {
                  return (
                    <li
                      onClick={() => {
                        setActive(item.title);
                      }}
                      key={item.title}
                    >
                      {" "}
                      <Link className={active == item.title ? "activ" : ""} href={`/brands/${item.title.replace(/ /g, "_").toLocaleLowerCase()}`}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })
              : null}
          </ul>
        </ul>
      </StyledSide>
      <div>{children}</div>
    </StyledMainGrid>
  );
};

export default StyledMain;
