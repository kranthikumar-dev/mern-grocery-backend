const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendOtpEmail = async (email, otp) => {
  try {
    const info = await transporter.sendMail({
      from: `"OTP Verification" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP Code",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>OTP Verification</h2>
          <p>Your OTP is:</p>
          <h1 style="color: #2e6cff;">${otp}</h1>
          <p>This OTP is valid for <b>5 minutes</b>.</p>
          <br/>
          <p>If you didn’t request this, please ignore this email.</p>
        </div>
      `,
    });

    console.log("✅ Email sent:", info.messageId);
  } catch (err) {
    console.error("❌ Error while sending mail:", err);
    throw err; // optional: lets controller handle error
  }
};
