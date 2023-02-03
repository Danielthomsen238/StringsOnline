import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StyledListItems from "../../components/StyledListItem";
import { StyledBrand } from "../../src/styles/styledComponents/StyledBrand";
import { StyledList } from "../../src/styles/styledComponents/StyledList";

const BrandDetail = () => {
  const { query } = useRouter();

  const [data, getData] = useState<any[]>();
  const [groupInfo, getGroupInfo] = useState<any>();

  useEffect(() => {
    axios
      .get(`/api/brands`, { params: { brand: query.title } })
      .then((response) => {
        getGroupInfo(response.data.data);
        getData(response.data.data.item.products);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [query.title]);
  console.log(data);
  return (
    <>
      {groupInfo && (
        <StyledBrand>
          <div className="image_wrapper">
            <Image alt="instrument" src={groupInfo.item.image_fullpath} width={200} height={200} />
          </div>
          <div className="info">
            <h1>{groupInfo.item.title}</h1>
            <p>{groupInfo.item.description}</p>
          </div>
        </StyledBrand>
      )}

      <StyledList>
        {data &&
          data.map((item: any, idx: any) => {
            return (
              <StyledListItems
                title={item.name}
                id={item.id}
                key={idx}
                price={item.price}
                stock={item.stock}
                src={item.image_fullpath}
                description={item.description_short}
                link={item.request.url}
              />
            );
          })}
      </StyledList>
    </>
  );
};
export default BrandDetail;
