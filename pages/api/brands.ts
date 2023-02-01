import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { brand }: any = req.query;
  let capitalizedBrand: any = "";

  if (brand) {
    capitalizedBrand = brand.charAt(0).toUpperCase() + brand.slice(1);
  }
  const brandsArray: any = [];
  let returnData: any = [];
  try {
    const response = await axios.get("https://api.mediehuset.net/stringsonline/brands");
    response.data.items.forEach((element: any) => {
      brandsArray.push({ title: element.title, id: element.id });
    });
  } catch (error) {
    console.error(error);
  }
  for (let i = 0; i < brandsArray.length; i++) {
    if (brandsArray[i].title == capitalizedBrand) {
      try {
        const response = await axios.get(`https://api.mediehuset.net/stringsonline/brands/${brandsArray[i].id}`);
        returnData = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
  res.status(200).json({
    data: returnData,
  });
};

export default handler;
