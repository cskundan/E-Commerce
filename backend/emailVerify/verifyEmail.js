// import nodemailer from "nodemailer";
// import "dotenv/config";

// export const verifyEmail = (token, email) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//   });

//   const mailConfigurations = {
//     from: process.env.MAIL_USER,
//     to: email,
//     subject: "Email Verification",
//     text: `Hi! There, You have recently visited our website and entered your email.
//     Please follow the given link to verify your email
//     https://e-commerce-1-xl2n.onrender.com/verify/${token}
//     Thanks`,
//   };

//   transporter.sendMail(mailConfigurations, function (error, info) {
//     if (error) throw Error(error);
//     console.log("Email Sent Successfully");
//     console.log(info);
//   });
// };

import nodemailer from "nodemailer";

export const verifyEmail = async (token, email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailConfigurations = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Email Verification",
      text: `Hi!

You have recently visited our website and entered your email.

Please follow the given link to verify your email:

https://e-commerce-1-xl2n.onrender.com/verify/${token}

Thanks`,
    };

    const info = await transporter.sendMail(mailConfigurations);

    console.log("Email sent successfully:", info.messageId);

    return info;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};