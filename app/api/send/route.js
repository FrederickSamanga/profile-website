import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

const fromEmail = process.env.EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const mailOptions = {
      from: fromEmail,
      to: ["fredericksamangazw@gmail.com", email],
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    return NextResponse.json(info);
  } catch (error) {
    console.error('Error sending email: ', error);
    return NextResponse.json({ error });
  }
}