import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { item }: any = req.query;

  let capitalized;

  if (item) {
    let str = item;
    let arr = str.split("/").filter(function (element: any) {
      return element !== "";
    });
    capitalized = arr.map(function (word: any) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    capitalized = capitalized.map(function (word: any) {
      return word.replace(/_/g, " ");
    });
  }

  const categorieArray: any = [];
  const subCategorieArray: any = [];
  let items: any = [];
  let route: any = [];
  let returnData: any = [];
  try {
    const response = await axios.get("https://api.mediehuset.net/stringsonline/groups");
    response.data.items.forEach((element: any) => {
      categorieArray.push({ title: element.title, id: element.id, parent_id: element.parent_id });
    });
  } catch (error) {
    console.error(error);
  }

  for (let i = 0; i < categorieArray.length; i++) {
    if (capitalized[0] == categorieArray[i].title) {
      try {
        const response = await axios.get(`https://api.mediehuset.net/stringsonline/groups/${categorieArray[i].id}`);
        response.data.items.subgroups.forEach((element: any) => {
          subCategorieArray.push({ title: element.title, id: element.id, parent_id: element.parent_id });
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
  for (let i = 0; i < subCategorieArray.length; i++) {
    if (capitalized[1] == subCategorieArray[i].title) {
      try {
        const response = await axios.get(
          `https://api.mediehuset.net/stringsonline/groups/${subCategorieArray[i].parent_id}/subgroup/${subCategorieArray[i].id}`
        );
        items = response.data.items.subgroup.products;
        route = response.data.items;
      } catch (error) {
        console.error(error);
      }
    }
  }

  for (let i = 0; i < items.length; i++) {
    if (capitalized[2] == items[i].name) {
      try {
        const response = await axios.get(`https://api.mediehuset.net/stringsonline/groups/${route.id}/subgroup/${route.subgroup.id}/product/${items[i].id}`);
        returnData = response.data.items.subgroup.product;
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
