import dbConnect from "../utils/dbConnect";
import User from "../models/userModel";
import userDetails from "../utils/data.json";
import nodemailer from "nodemailer";

dbConnect();

export async function getUserData(req, res) {
  try {
    const userDetails = await User.find();
    return res.status(201).json({ userDetails });
  } catch (error) {
    return res.status(401).json({ error });
  }
}

export async function contactFormSubmit(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_AUTH_EMAIL,
      pass: process.env.NEXT_PUBLIC_AUTH_PASS,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.NEXT_PUBLIC_AUTH_EMAIL,
    to: process.env.NEXT_PUBLIC_EMAIL_TO,
    subject: "Message from NextJS Portfolio from " + name,
    text: "Name: " + name + "; Message: " + message + "; Sent from: " + email,
    html: `<div><p>Message coming from NextJS Portfolio</p><p>Name: ${name}</p><p>Message: ${message}</p><p>Sent from : ${email}</p></div>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.status(201).json({ message: "Message successfully sent!" });
}
