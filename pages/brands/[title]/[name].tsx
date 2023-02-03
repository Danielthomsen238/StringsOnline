import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StoreApi, useSearchApi } from "../../../helpers/useSearchApi";
import { StyledItemDetail } from "../../../src/styles/styledComponents/StyledItemDetail";

const BrandDetails = () => {
  const router = useRouter();
  const [data, getData] = useState<any>();
  const { searchApi } = useSearchApi() as StoreApi;

  useEffect(() => {
    axios
      .get(`${searchApi}`)
      .then((response) => {
        getData(response.data.item);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [searchApi]);

  console.log(data);
  let splitStr;
  let specs;
  let newArr = [];
  if (data) {
    splitStr = data.description_long.split("Specifikationer");
    if (splitStr.length < 0) {
      specs = splitStr[1].split(":");

      for (let i = 0; i < specs.length; i += 2) {
        newArr.push(specs[i] + ": " + specs[i + 1]);
      }
    }
  }
  return (
    <>
      {data && (
        <StyledItemDetail>
          <div className="image_wrapper">
            <div className="main_image">
              {" "}
              <Image width={400} height={200} alt="instrument" src={data.image.fullpath} />
            </div>

            {data.gallery.map((item: any, idx: any) => {
              return <Image key={idx} width={200} height={200} alt="instrument" src={item.fullpath} />;
            })}
          </div>
          <div className="info">
            <h1>{data.name}</h1>
            <p>{splitStr[0]}</p>
            {newArr.map((item: any, idx: any) => {
              return <p key={idx}>{item}</p>;
            })}
          </div>
          <div className="price">
            <Image src={data.brand_image} alt="brand" width={200} height={200} />
            <p>Pris: DKK {data.price}</p>
            <div className="input">
              <input type="number" />
              <button>Læg i kurv</button>
            </div>

            <p className="stock">{data.stock}+ På lager</p>
          </div>
        </StyledItemDetail>
      )}
    </>
  );
};
export default BrandDetails;
