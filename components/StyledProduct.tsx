import { StyledProduct } from "../src/styles/styledComponents/StyledProduct";
import Image from "next/image";
import Link from "next/link";

const StyledProducts = (props: any) => {
  return (
    <StyledProduct>
      <div className="image_wrapper">{/* <Image src={props.src} alt={props.alt} width={600} height={400} /> */}</div>

      <div className="product_info">
        <div className="info">
          <h3>{props.title}</h3>
          <p>
            {props.description} <Link href="/">Læs mere</Link>
          </p>
        </div>

        <div className="price">
          <p>Pris: {props.price}</p>
          <button>Læg i kurv</button>
        </div>
      </div>
    </StyledProduct>
  );
};

export default StyledProducts;
