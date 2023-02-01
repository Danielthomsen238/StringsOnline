import { StyledProduct } from "../src/styles/styledComponents/StyledProduct";
import Image from "next/image";
import Link from "next/link";
import { useSearchApi, StoreApi } from "../helpers/useSearchApi";

const StyledProducts = (props: any) => {
  const { searchApi, setSearchApi } = useSearchApi() as StoreApi;

  const handleSave = () => {
    setSearchApi(props.link);
  };
  let name = props.title.replace(/ /g, "_");
  return (
    <StyledProduct>
      <div className="image_wrapper">
        <Image src={props.src} alt={"instrument"} width={400} height={200} />
      </div>

      <div className="product_info">
        <div className="info">
          <h3>{props.title}</h3>
          <p>
            {props.description}{" "}
            <Link onClick={handleSave} href={props.link ? `/search/${name}` : "/"}>
              Læs mere
            </Link>
          </p>
        </div>

        <div className="price">
          <p>Pris: DKK {props.price}</p>
          <button>Læg i kurv</button>
        </div>
      </div>
    </StyledProduct>
  );
};

export default StyledProducts;
