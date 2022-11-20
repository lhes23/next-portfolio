import { getUserData } from "../../controllers/userController";
import dbConnect from "../../utils/dbConnect";

dbConnect();

export default async function handler(req, res) {
  await getUserData(req, res);
}
