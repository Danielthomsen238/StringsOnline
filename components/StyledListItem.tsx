import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledListItem } from "../src/styles/styledComponents/StyledListItem";

const StyledListItems = (props: any) => {
  const router = useRouter();
  console.log(router.asPath);
  const path = props.title.replace(/ /g, "_");
  return (
    <StyledListItem>
      <div className="image_wrapper">
        <Image src={props.src} alt="Instrument" width={200} height={100} />
      </div>
      <div className="info">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Link href={`${router.asPath}/${path}`}>Læs mere</Link>
      </div>
      <div className="price">
        <p>Pris: DKK {props.price}</p>
        <button>Læg i Kurv</button>
        <p className="stock">{props.stock}+ på lager</p>
      </div>
    </StyledListItem>
  );
};

export default StyledListItems;
