import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BasserSubItem = () => {
  const { query } = useRouter();

  const [Data, getData] = useState();

  useEffect(() => {
    axios
      .get(`/api/data`, { params: { subCategorie: query.title, categorie: "Guitarer" } })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [query.title]);
  return <h1>{query.title}</h1>;
};

export default BasserSubItem;
