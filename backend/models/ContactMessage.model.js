const mongoose = require("mongoose");

const contactMessageSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        phone: { type: String, trim: true },
        subject: { type: String, trim: true },
        message: { type: String, required: true, trim: true },
        readStatus: { type: Boolean, default: false },
        replyStatus: { type: Boolean, default: false },
        ipAddress: { type: String },
        userAgent: { type: String },
    },
    { timestamps: true },
);

module.exports = mongoose.model("ContactMessage", contactMessageSchema);
