const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;
const UPLOADS_DIR = path.join(__dirname, 'uploads');

// --- MongoDB Connection ---
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/optics_tech";

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// --- Schemas ---
const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    specifications: [String],
    image: String,
    createdAt: { type: Date, default: Date.now }
});

const EnquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    product: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const GallerySchema = new mongoose.Schema({
    url: String,
    caption: String,
    createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', ProductSchema);
const Enquiry = mongoose.model('Enquiry', EnquirySchema);
const GalleryImage = mongoose.model('GalleryImage', GallerySchema);

// --- Middleware ---
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(UPLOADS_DIR));
app.use(express.static(path.join(__dirname, 'client/dist')));

// --- CLOUDINARY CONFIGURATION ---
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Use memory storage - upload buffer directly to Cloudinary
const upload = multer({ storage: multer.memoryStorage() });

// Helper function to upload buffer to Cloudinary
function uploadToCloudinary(buffer) {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: 'optics-technology' },
            (error, result) => {
                if (error) return reject(error);
                resolve(result.secure_url);
            }
        );
        stream.end(buffer);
    });
}

// --- EMAIL TRANSPORTER CONFIGURATION ---
// IMPORTANT: Replace 'YOUR_EMAIL@gmail.com' and 'YOUR_APP_PASSWORD' with your actual Gmail and an App Password.
// You must enable 2-Step Verification on your Google Account to create an App Password.
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'opticstechnology.info@gmail.com', // Change this to your actual email
        pass: 'YOUR_APP_PASSWORD_HERE'           // Put your Gmail App Password here
    }
});

// --- ENQUIRY API ---
app.post('/api/enquiries', async (req, res) => {
    try {
        const newEnquiry = new Enquiry(req.body);
        await newEnquiry.save();
        
        // Setup email data
        const mailOptions = {
            from: 'opticstechnology.info@gmail.com',     // Sender address (your email)
            to: 'kartikeyrana1977@gmail.com',            // Receiver address (where you want to receive alerts)
            subject: `New Enquiry from ${req.body.name} for ${req.body.product || 'Optics Technology'}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
                    <h2 style="color: #0f172a;">New Enquiry Received! 🎉</h2>
                    <p><strong>Name:</strong> ${req.body.name}</p>
                    <p><strong>Email:</strong> ${req.body.email}</p>
                    <p><strong>Phone:</strong> ${req.body.phone}</p>
                    <p><strong>Product/Subject:</strong> ${req.body.product || 'General Inquiry'}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #3b82f6; margin-top: 10px;">
                        ${req.body.message || 'No specific message provided.'}
                    </div>
                </div>
            `
        };

        // Send email (we don't wait for it to finish before responding to user to keep UI fast)
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("❌ Email sending failed:", error);
            } else {
                console.log("✅ Enquiry Alert Email sent: " + info.response);
            }
        });

        res.json({ success: true, enquiry: newEnquiry });
    } catch (err) {
        console.error("Failed to save enquiry:", err);
        res.status(500).json({ error: "Failed to save enquiry" });
    }
});

app.get('/api/enquiries', async (req, res) => {
    try {
        const enquiries = await Enquiry.find().sort({ date: -1 });
        res.json(enquiries);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch enquiries" });
    }
});

// --- AI CHAT ENDPOINT REMOVED (Now using Rule-Based Client Chatbot) ---

// --- PRODUCT API ---
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

app.post('/api/products', upload.single('image'), async (req, res) => {
    try {
        let imageUrl = null;
        if (req.file) {
            imageUrl = await uploadToCloudinary(req.file.buffer);
        }
        const productData = {
            ...req.body,
            image: imageUrl
        };
        const newProduct = new Product(productData);
        await newProduct.save();
        res.json(newProduct);
    } catch (err) {
        res.status(500).json({ error: "Failed to add product" });
    }
});

app.delete('/api/products/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete product" });
    }
});

// --- GALLERY API ---
app.get('/api/gallery', async (req, res) => {
    try {
        const images = await GalleryImage.find();
        res.json(images);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch gallery" });
    }
});

app.post('/api/gallery', upload.single('image'), async (req, res) => {
    try {
        let imageUrl = null;
        if (req.file) {
            imageUrl = await uploadToCloudinary(req.file.buffer);
        }
        const newImage = new GalleryImage({
            url: imageUrl,
            caption: req.body.caption || 'Optics Technology Event'
        });
        await newImage.save();
        res.json(newImage);
    } catch (err) {
        console.error("Gallery Upload Error: ", err);
        res.status(500).json({ error: "Failed to upload image: " + (err.message || err.toString()) });
    }
});

app.delete('/api/gallery/:id', async (req, res) => {
    try {
        await GalleryImage.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete image" });
    }
});

// Route for /admin
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Catch-all route to serve the React app
app.get(/.*$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
