import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import StyledProducts from "../components/StyledProduct";
import { useSearch, StoreState } from "../helpers/useSearch";
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

const Forside = (props: any) => {
  const { data: session, status } = useSession();
  const { searchString } = useSearch() as StoreState;
  const [error, setError] = useState<string>();
  const [data, getData] = useState<Favorite[]>();
  const [searchdata, getSearchData] = useState<any>();
  useEffect(() => {
    axios.get("https://api.mediehuset.net/stringsonline/groups/1/subgroup/2").then((response) => {
      getData(response.data.items.subgroup.products);
    });
  }, []);
  useEffect(() => {
    axios.get(`https://api.mediehuset.net/stringsonline/search/${searchString}`).then((response) => {
      if (response.data.error == "No records found!") {
        setError("No records found!");
      } else {
        setError("");
        getSearchData(response.data.items);
      }
    });
  }, [searchString]);
  console.log(searchdata);
  return (
    <StyledPrimary>
      <StyledHeader />
      <StyledHome>
        {searchString ? (
          <div className="h1">{error ? <h1>{error}</h1> : <h1>Søge resultater</h1>}</div>
        ) : (
          <div className="h1">
            <p>Kundernes</p>
            <h1>favoritter</h1>
          </div>
        )}

        {searchString && !error ? (
          <section>
            {searchdata &&
              searchdata.map((item: any, idx: any) => {
                return (
                  <StyledProducts
                    key={idx}
                    title={item.name}
                    src={item.image_fullpath}
                    alt={item.brand}
                    description={item.description_short}
                    price={item.price}
                    link={item.request}
                  />
                );
              })}
          </section>
        ) : (
          !error && (
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
          )
        )}
      </StyledHome>
    </StyledPrimary>
  );
};

Forside.auth = false;
export default Forside;
