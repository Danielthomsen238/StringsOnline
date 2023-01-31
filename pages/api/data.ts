import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { categorie, subCategorie }: any = req.query;
  console.log("cate", categorie);
  let capitalizedSubCategorie: any = "";
  let capitalizedCategorie: any = "";
  if (subCategorie && categorie) {
    capitalizedSubCategorie = subCategorie.charAt(0).toUpperCase() + subCategorie.slice(1);
    capitalizedSubCategorie = capitalizedSubCategorie.replace(/_/g, " ");
    capitalizedCategorie = categorie.replace(/_/g, " ");
  }

  const categorieArray: any = [];
  const subCategorieArray: any = [];
  let returnData: any = [];
  try {
    const response = await axios.get("https://api.mediehuset.net/stringsonline/groups");
    response.data.items.forEach((element: any) => {
      categorieArray.push({ title: element.title, id: element.id, parent_id: element.parent_id });
    });
  } catch (error) {
    console.error(error);
  }

  console.log(categorieArray, capitalizedCategorie);
  for (let i = 0; i < categorieArray.length; i++) {
    if (capitalizedCategorie == categorieArray[i].title) {
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
    if (capitalizedSubCategorie == subCategorieArray[i].title) {
      try {
        const response = await axios.get(
          `https://api.mediehuset.net/stringsonline/groups/${subCategorieArray[i].parent_id}/subgroup/${subCategorieArray[i].id}`
        );
        returnData = response.data.items;
      } catch (error) {
        console.error(error);
      }
    }
  }

  // Do something with the parameters
  console.log(returnData);
  // Return the response
  res.status(200).json({
    data: returnData,
  });
};

export default handler;
