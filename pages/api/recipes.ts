import { NextApiRequest, NextApiResponse } from "next";
import recipesList from "./recipesList.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(recipesList);
}
