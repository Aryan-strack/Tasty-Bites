import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 8080; // Runs on port 8080

// Middleware
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Test Route
app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

// Reservation Route
app.post("/api/reservations", (req, res) => {
  const { date, time, guests } = req.body;

  if (!date || !time || !guests) {
    return res.status(400).json({ message: "All fields are required." });
  }

  console.log("Reservation received:", req.body);
  res.status(201).json({ message: "🎉 Reservation successful!" });
});


app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("Received data:", req.body);
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully! ✅" });
    
  } catch (error) {
    console.error("❌ Error in sending email:", error);
    res.status(500).json({ message: "Something went wrong.", error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
