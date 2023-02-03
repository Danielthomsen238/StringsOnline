import axios from "axios";

export const addToCart = (token: any, item_id: any, quantity: any = 1) => {
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios.post(`https://api.mediehuset.net/stringsonline/cart`, { product_id: item_id, quantity }, config).then((response) => {
    console.log(response);
  });
};

export const updateItem = (token: any, item_id: any, product_id: any, quantity: any = 1) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const data = {
    product_id: product_id,
    field: "quantity",
    value: 2,
  };
  console.log(data);
  axios
    .patch(`https://api.mediehuset.net/stringsonline/cart/${item_id}`, data, config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const emptyCart = (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .delete(`https://api.mediehuset.net/stringsonline/cart`, config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
