const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { sendContactEmail, sendQuoteEmail, sendNewsletterEmail } = require('./services/mailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*', // Allow Next.js frontend
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Anjali Doors API Server',
    timestamp: new Date().toISOString(),
  });
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message, product } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone number are required fields.',
      });
    }

    const result = await sendContactEmail({ name, email, phone, subject, message, product });

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out! Your inquiry has been sent successfully. Our team will contact you shortly.',
      previewUrl: result.previewUrl,
    });
  } catch (error) {
    console.error('Error handling /api/contact:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send inquiry. Please try again or call us directly at +91 9823521791.',
      error: error.message,
    });
  }
});

// Quote Request Route
app.post('/api/quote', async (req, res) => {
  try {
    const { name, email, phone, company, doorType, quantity, dimensions, notes } = req.body;

    if (!name || !email || !phone || !doorType) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone, and door type are required for a quote request.',
      });
    }

    const result = await sendQuoteEmail({ name, email, phone, company, doorType, quantity, dimensions, notes });

    return res.status(200).json({
      success: true,
      message: 'Quote request submitted successfully! Anjali Doors engineering team will prepare an estimate.',
      previewUrl: result.previewUrl,
    });
  } catch (error) {
    console.error('Error handling /api/quote:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit quote request. Please try again.',
      error: error.message,
    });
  }
});

// Newsletter Subscription
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, message: 'Valid email address is required.' });
  }

  try {
    await sendNewsletterEmail(email);
    console.log(`[Newsletter] Subscribed & notified for: ${email}`);
    return res.status(200).json({
      success: true,
      message: 'Thank you for subscribing to Anjali Doors news & industry updates!',
    });
  } catch (err) {
    console.error('[Newsletter] Error:', err.message);
    return res.status(200).json({
      success: true,
      message: 'Thank you for subscribing to Anjali Doors news & industry updates!',
    });
  }
});

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`Anjali Doors API Server running on port ${PORT}`);
  console.log(`Ready for Contact & Quote form submissions`);
  console.log(`===============================================`);
});
