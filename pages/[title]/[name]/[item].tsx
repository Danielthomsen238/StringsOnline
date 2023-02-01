import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Details = () => {
  const router = useRouter();
  const [data, getData] = useState<any[]>();
  const [groupInfo, getGroupInfo] = useState<any>();

  useEffect(() => {
    axios
      .get(`/api/item`, { params: { item: router.asPath } })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [router.asPath]);
  return <h1>works</h1>;
};

export default Details;
