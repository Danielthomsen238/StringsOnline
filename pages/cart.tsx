import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { emptyCart, updateItem } from "../helpers/cart";
import { StyledCart } from "../src/styles/styledComponents/StyledCart";
import { StyledCartItem } from "../src/styles/styledComponents/StyledCartItem";

const Cart = () => {
  const { data: session, status } = useSession();
  const payload = {
    headers: { authorization: `Bearer ${session?.user.token}` },
  };

  const [data, getData] = useState<any>();

  useEffect(() => {
    axios.get(`https://api.mediehuset.net/stringsonline/cart`, payload).then((response) => {
      getData(response.data.cartlines);
    });
  }, []);

  return (
    <StyledCart>
      {data &&
        data.map((item: any, idx: any) => {
          return (
            <StyledCartItem key={idx}>
              <div className="image_wrapper">
                <Image src={item.image_fullpath} alt="cart_item" width={200} height={100} />
              </div>
              <div className="info">
                <h2>{item.name}</h2>
                <div className="input_wrapper">
                  <p>antal: </p>
                  <div className="input">
                    <button
                      onClick={() => {
                        let remove = 1;
                        updateItem(session?.user.token, item.id, item.product_id, item.quantity - remove);
                      }}
                    >
                      -
                    </button>
                    <input value={item.quantity} type="number" min="0" disabled />
                    <button>+</button>
                  </div>
                  <p>Pris: DKK {item.price}</p>
                </div>
              </div>
            </StyledCartItem>
          );
        })}
      <button onClick={() => emptyCart(session?.user.token)}>Tøm Kurv</button>
    </StyledCart>
  );
};

export default Cart;
