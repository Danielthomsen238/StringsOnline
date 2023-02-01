import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StyledListItems from "../../components/StyledListItem";
import { StyledList } from "../../src/styles/styledComponents/StyledList";

const BrandDetail = () => {
  const { query } = useRouter();

  const [data, getData] = useState<any[]>();
  const [groupInfo, getGroupInfo] = useState<any>();

  useEffect(() => {
    axios
      .get(`/api/brands`, { params: { brand: query.title } })
      .then((response) => {
        getData(response.data.data.item.products);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [query.title]);

  console.log(data);
  return (
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
            />
          );
        })}
    </StyledList>
  );
};
export default BrandDetail;
