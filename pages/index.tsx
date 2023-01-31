import axios from "axios";
import { useEffect, useState } from "react";
import StyledProducts from "../components/StyledProduct";
import { StyledPrimary } from "../src/styles/Primary/StyledPrimary";
import { StyledHeader } from "../src/styles/styledComponents/StyledHeader";
import { StyledHome } from "../src/styles/styledComponents/StyledHome";

interface Favorite {
  brand: string;
  description_long: string;
  description_short: string;
  id: number;
  image_filename: string;
  image_fullpath: string;
  item_number: number;
  name: string;
  offprice: number;
  price: number;
  rating: number;
  request: {
    type: string;
    url: string;
  };
  stock: number;
}

const Forside = () => {
  const [data, getData] = useState<Favorite[]>();
  useEffect(() => {
    axios.get("https://api.mediehuset.net/stringsonline/groups/1/subgroup/2").then((response) => {
      getData(response.data.items.subgroup.products);
    });
  }, []);
  return (
    <StyledPrimary>
      <StyledHeader />
      <StyledHome>
        <div className="h1">
          <p>Kundernes</p>
          <h1>favoritter</h1>
        </div>

        <section>
          {data &&
            data.map((item, idx) => {
              if (idx < 4) {
                return (
                  <StyledProducts
                    key={idx}
                    title={item.name}
                    src={item.image_fullpath}
                    alt={item.brand}
                    description={item.description_short}
                    price={item.price}
                  />
                );
              }
            })}
        </section>
      </StyledHome>
    </StyledPrimary>
  );
};

export default Forside;
