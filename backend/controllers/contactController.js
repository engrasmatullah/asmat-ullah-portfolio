import nodemailer from "nodemailer";

async function createContactMessage(req, res) {
  try {
    const { name, email, message } = req.body;

    // Check all fields
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Please fill in all fields.",
      });
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to your Gmail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Contact Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error sending contact email:", error);

    res.status(500).json({
      error: "Something went wrong while sending the message.",
    });
  }
}

export { createContactMessage };
