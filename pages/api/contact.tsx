import { contactFormSubmit } from "../../controllers/userController";

export default async function handler(req, res) {
  await contactFormSubmit(req, res);
}
