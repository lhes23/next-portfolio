import dbConnect from "../utils/dbConnect";
import User from "../models/userModel";
// import { PersonalDetail, ProfessionalDetail } from "../models/userModel";
import userDetails from "../utils/data.json";

dbConnect();

export async function getUserData(req, res) {
  try {
    const userDetails = await User.find();
    return res.status(201).json({ userDetails });
  } catch (error) {
    return res.status(401).json({ error });
  }
}
