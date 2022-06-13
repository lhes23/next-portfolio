import dbConnect from "../utils/dbConnect";
// import User from "../models/userModel";
import { User, PersonalDetail } from "../models/userModel";
import userDetails from "../utils/data.json";

dbConnect();

export async function getUserData(req, res) {
  try {
    // const user = await User.find({});
    // const user = await PersonalDetail.find();
    return res.status(201).json({ userDetails });
  } catch (error) {
    return res.status(401).json({ error });
  }
}
