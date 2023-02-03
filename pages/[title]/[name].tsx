import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StyledListItems from "../../components/StyledListItem";
import { addToCart } from "../../helpers/cart";
import { StyledList } from "../../src/styles/styledComponents/StyledList";

const BasserSubItem = () => {
  const router = useRouter();
  let str = router.asPath;
  let arr = str.split("/").filter(function (element) {
    return element !== "";
  });
  let capitalized = arr.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const [data, getData] = useState<any[]>();
  const [groupInfo, getGroupInfo] = useState<any>();

  useEffect(() => {
    axios
      .get(`/api/data`, { params: { subCategorie: capitalized[1], categorie: capitalized[0] } })
      .then((response) => {
        console.log(response);
        getGroupInfo({
          parent_id: response.data.data.subgroup.parent_id,
          subgroup_id: response.data.data.subgroup.id,
        });
        getData(response.data.data.subgroup.products);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [router.asPath]);

  return (
    <StyledList>
      {data &&
        data.map((item: any, idx: any) => {
          return (
            <StyledListItems
              subgroup_id={groupInfo.subgroup_id}
              parent_id={groupInfo.parent_id}
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
BasserSubItem.auth = false;
export default BasserSubItem;
