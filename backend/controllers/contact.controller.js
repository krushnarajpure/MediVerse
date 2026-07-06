const asyncHandler = require("../utils/asyncHandler");
const ContactMessage = require("../models/ContactMessage.model");
const { sendEmail } = require("../utils/sendEmail");

exports.submitContactMessage = asyncHandler(async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "Please provide your name, email, and message." });
    }

    const contactMessage = await ContactMessage.create({
        name,
        email,
        phone,
        subject,
        message,
        ipAddress: req.ip,
        userAgent: req.get("user-agent"),
    });

    const adminEmail = process.env.ADMIN_EMAIL || "krushnarajpure93@gmail.com";

    try {
        await sendEmail({
            email: adminEmail,
            subject: `New SevaSetu Contact Message: ${subject || "General Inquiry"}`,
            html: `<h2>New Contact Message</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || "N/A"}</p><p><strong>Subject:</strong> ${subject || "General Inquiry"}</p><p><strong>Message:</strong></p><p>${message}</p>`,
        });

        await sendEmail({
            email,
            subject: "Thank you for contacting SevaSetu",
            html: "<h2>Thank you for contacting SevaSetu</h2><p>We have received your message and will get back to you shortly.</p>",
        });
    } catch (error) {
        console.error("Contact email error:", error);
    }

    res.status(201).json({ success: true, message: "Message saved successfully", data: contactMessage });
});

exports.getContactMessages = asyncHandler(async (req, res) => {
    const messages = await ContactMessage.find().sort("-createdAt");
    res.status(200).json({ success: true, count: messages.length, data: messages });
});
