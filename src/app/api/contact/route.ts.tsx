import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const POST = async (req: Request) => {
  const { name, email, message } = await req.json()

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_AUTH_EMAIL,
      pass: process.env.NEXT_PUBLIC_AUTH_PASS
    },
    secure: true
  })

  const mailData = {
    from: process.env.NEXT_PUBLIC_AUTH_EMAIL,
    to: process.env.NEXT_PUBLIC_EMAIL_TO,
    subject: "Message from NextJS Portfolio from " + name,
    text: "Name: " + name + "; Message: " + message + "; Sent from: " + email,
    html: `<div><p>Message coming from NextJS Portfolio</p><p>Name: ${name}</p><p>Message: ${message}</p><p>Sent from : ${email}</p></div>`
  }

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })

  return NextResponse.json({ message: "Message successfully sent!" })
}
