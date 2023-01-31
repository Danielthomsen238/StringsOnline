import { StyledSide } from "../src/styles/styledComponents/StyledSide";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledMainGrid } from "../src/styles/Primary/StyledMainGrid";
import { Categorie } from "../types/interfaces/DataInterface";
import Link from "next/link";

const StyledMain = ({ children }: any) => {
  const [categories, getCategories] = useState<Categorie[]>();
  const [active, setActive] = useState<string>("");
  const [showCategorie, setShowCategorie] = useState<number>();

  useEffect(() => {
    axios
      .get("https://api.mediehuset.net/stringsonline/productgroups")
      .then((response) => {
        getCategories(response.data.items);
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
                    onClick={() => {
                      setActive(parentItem.title);
                      setShowCategorie(parentItem.id);
                    }}
                  >
                    <Link className={active == parentItem.title ? "activ" : ""} href={`/${parentItem.title.replace(/ /g, "_").toLocaleLowerCase()}`}>
                      {parentItem.title}
                    </Link>
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
        </ul>
      </StyledSide>
      <div>{children}</div>
    </StyledMainGrid>
  );
};

export default StyledMain;
