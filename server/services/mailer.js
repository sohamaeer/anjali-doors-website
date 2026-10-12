const nodemailer = require('nodemailer');

const SENDER_EMAIL = 'integralwebsolution@gmail.com';
const ADMIN_RECIPIENTS = [
  'integralwebsolution@gmail.com',
  'mayurkulkarni@anjalidoor.com',
];

let cachedTransporter = null;

/**
 * Initialize or get Nodemailer Transporter
 */
async function getTransporter() {
  const appPassword =
    process.env.GMAIL_APP_PASSWORD ||
    process.env.GMAIL_APP_PASS ||
    process.env.SMTP_PASS;

  // If a valid Gmail App Password is provided in .env
  if (appPassword && appPassword.trim() && !appPassword.includes('your_16_digit_app_password')) {
    const cleanPassword = appPassword.replace(/\s+/g, '');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SENDER_EMAIL,
        pass: cleanPassword,
      },
    });

    try {
      await transporter.verify();
      console.log(`[Mailer] Authenticated with Gmail SMTP via ${SENDER_EMAIL}`);
      cachedTransporter = transporter;
      return cachedTransporter;
    } catch (verifyErr) {
      console.error(`[Mailer] Gmail authentication failed for ${SENDER_EMAIL}:`, verifyErr.message);
      console.warn(`[Mailer] Check your 16-character Google App Password in server/.env`);
    }
  }

  // Fallback to cached transporter if available
  if (cachedTransporter) return cachedTransporter;

  // Development fallback: Ethereal test account or simulated logger
  console.log(`[Mailer] No active Gmail App Password provided in server/.env`);
  console.log(`[Mailer] Falling back to simulated/test mode until GMAIL_APP_PASSWORD is set.`);

  try {
    const testAccount = await nodemailer.createTestAccount();
    cachedTransporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    console.log(`[Mailer] Initialized test transporter (${testAccount.user})`);
    return cachedTransporter;
  } catch (err) {
    cachedTransporter = {
      sendMail: async (options) => {
        console.log(`\n--- [SIMULATED EMAIL DISPATCH] ---`);
        console.log(`From:    ${options.from}`);
        console.log(`To:      ${options.to}`);
        console.log(`Subject: ${options.subject}`);
        console.log(`----------------------------------\n`);
        return { messageId: 'simulated-' + Date.now() };
      },
    };
    return cachedTransporter;
  }
}

/**
 * HTML Template for Admin Notifications (sent to integralwebsolution & mayurkulkarni)
 */
function buildAdminNotificationHtml({ type, data }) {
  const formattedDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  return `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; background-color: #ffffff;">
      <!-- Header -->
      <div style="background-color: #00381f; color: #ffffff; padding: 24px 28px; text-align: left; border-bottom: 4px solid #e5a832;">
        <h1 style="margin: 0; font-size: 22px; font-weight: bold; letter-spacing: 0.5px;">ANJALI DOORS PVT. LTD.</h1>
        <p style="margin: 6px 0 0; font-size: 14px; color: #e5a832; font-weight: 600;">
          NEW ${type === 'quote' ? 'ENGINEERING QUOTE REQUEST' : 'WEBSITE INQUIRY'}
        </p>
      </div>

      <!-- Content -->
      <div style="padding: 28px; background-color: #faf8f5;">
        <p style="margin: 0 0 16px; font-size: 14px; color: #4b5563;">
          A new form submission has been received from the official Anjali Doors website on <strong>${formattedDate} (IST)</strong>.
        </p>

        <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <tbody>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 16px; width: 35%; color: #6b7280; font-weight: 600; font-size: 13px;">Full Name:</td>
              <td style="padding: 12px 16px; color: #111827; font-weight: bold; font-size: 14px;">${data.name || 'N/A'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 16px; color: #6b7280; font-weight: 600; font-size: 13px;">Email Address:</td>
              <td style="padding: 12px 16px; color: #111827; font-size: 14px;">
                <a href="mailto:${data.email}" style="color: #00381f; text-decoration: underline; font-weight: 600;">${data.email || 'N/A'}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 16px; color: #6b7280; font-weight: 600; font-size: 13px;">Phone Number:</td>
              <td style="padding: 12px 16px; color: #111827; font-size: 14px;">
                <a href="tel:${data.phone}" style="color: #00381f; font-weight: bold; text-decoration: none;">${data.phone || 'N/A'}</a>
              </td>
            </tr>
            ${data.company ? `
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 16px; color: #6b7280; font-weight: 600; font-size: 13px;">Company / Firm:</td>
              <td style="padding: 12px 16px; color: #111827; font-size: 14px;">${data.company}</td>
            </tr>` : ''}
            ${data.product || data.doorType ? `
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 16px; color: #6b7280; font-weight: 600; font-size: 13px;">Door Solution / Type:</td>
              <td style="padding: 12px 16px; color: #00381f; font-weight: bold; font-size: 14px;">${data.product || data.doorType}</td>
            </tr>` : ''}
            ${data.quantity ? `
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 16px; color: #6b7280; font-weight: 600; font-size: 13px;">Quantity:</td>
              <td style="padding: 12px 16px; color: #111827; font-size: 14px;">${data.quantity}</td>
            </tr>` : ''}
            ${data.dimensions ? `
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 16px; color: #6b7280; font-weight: 600; font-size: 13px;">Dimensions / Specs:</td>
              <td style="padding: 12px 16px; color: #111827; font-size: 14px;">${data.dimensions}</td>
            </tr>` : ''}
            ${data.subject ? `
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 12px 16px; color: #6b7280; font-weight: 600; font-size: 13px;">Subject:</td>
              <td style="padding: 12px 16px; color: #111827; font-size: 14px;">${data.subject}</td>
            </tr>` : ''}
          </tbody>
        </table>

        <!-- Message/Notes Box -->
        <div style="margin-top: 20px; background-color: #ffffff; padding: 18px; border-radius: 8px; border-left: 4px solid #00381f; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <strong style="color: #00381f; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message / Project Requirements:</strong>
          <p style="margin: 10px 0 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-line;">
            ${data.message || data.notes || 'No additional notes provided.'}
          </p>
        </div>

        <div style="margin-top: 20px; padding: 12px; background-color: #e6f0ea; border-radius: 6px; font-size: 12px; color: #00381f;">
          <strong>Quick Action:</strong> Click "Reply" in your email client to directly email the client at <strong>${data.email}</strong>.
        </div>
      </div>

      <!-- Footer -->
      <div style="background-color: #1f2937; color: #9ca3af; padding: 16px 24px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">Dispatched to Anjali Doors Administration Desk</p>
        <p style="margin: 4px 0 0; color: #d1d5db;">
          Recipients: <code>integralwebsolution@gmail.com</code> &bull; <code>mayurkulkarni@anjalidoor.com</code>
        </p>
      </div>
    </div>
  `;
}

/**
 * HTML Template for Customer Acknowledgment (sent to user's entered email)
 */
function buildCustomerAcknowledgmentHtml({ type, data }) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; background-color: #ffffff;">
      <!-- Header -->
      <div style="background-color: #00381f; color: #ffffff; padding: 26px 28px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 0.5px;">ANJALI DOORS PVT. LTD.</h1>
        <p style="margin: 6px 0 0; font-size: 13px; color: #e5a832; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
          Built for Strength &bull; Designed for Safety
        </p>
      </div>

      <!-- Main Body -->
      <div style="padding: 28px; background-color: #faf8f5; color: #374151; line-height: 1.6;">
        <h2 style="margin: 0 0 12px; color: #00381f; font-size: 20px;">
          Thank You for Reaching Out, ${data.name}!
        </h2>

        <p style="margin: 0 0 16px; font-size: 14px;">
          We have received your ${type === 'quote' ? 'quote request' : 'inquiry'} regarding our high-performance certified door solutions. Our technical engineering and commercial sales team is currently reviewing your details and will get in touch with you shortly.
        </p>

        <!-- Summary Card -->
        <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 18px; margin: 20px 0;">
          <h3 style="margin: 0 0 12px; font-size: 14px; color: #00381f; text-transform: uppercase; letter-spacing: 0.5px;">
            Summary of Your Submission:
          </h3>
          <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #4b5563;">
            <li style="margin-bottom: 6px;"><strong>Name:</strong> ${data.name}</li>
            <li style="margin-bottom: 6px;"><strong>Contact Phone:</strong> ${data.phone}</li>
            ${data.product || data.doorType ? `<li style="margin-bottom: 6px;"><strong>Product:</strong> ${data.product || data.doorType}</li>` : ''}
            ${data.quantity ? `<li style="margin-bottom: 6px;"><strong>Quantity:</strong> ${data.quantity}</li>` : ''}
            ${data.subject ? `<li style="margin-bottom: 6px;"><strong>Subject:</strong> ${data.subject}</li>` : ''}
          </ul>
        </div>

        <!-- Helpline Box -->
        <div style="background-color: #e6f0ea; border-left: 4px solid #00381f; border-radius: 6px; padding: 16px; margin: 20px 0;">
          <strong style="color: #00381f; font-size: 13px;">Need Immediate Assistance or Emergency Consultations?</strong>
          <p style="margin: 6px 0 0; font-size: 13px; color: #1f2937;">
            Phone / WhatsApp: <a href="tel:+919823521791" style="color: #00381f; font-weight: bold; text-decoration: none;">+(91)-9823521791</a>
          </p>
          <p style="margin: 4px 0 0; font-size: 13px; color: #1f2937;">
            Direct Email: <a href="mailto:mayurkulkarni@anjalidoor.com" style="color: #00381f; font-weight: bold;">mayurkulkarni@anjalidoor.com</a>
          </p>
        </div>

        <p style="margin: 24px 0 0; font-size: 14px;">
          Warm regards,<br />
          <strong>Technical Sales Desk</strong><br />
          <span style="color: #6b7280; font-size: 12px;">Anjali Doors Pvt. Ltd. &bull; MIDC Tarapur, Maharashtra</span>
        </p>
      </div>

      <!-- Footer -->
      <div style="background-color: #f3f4f6; color: #9ca3af; padding: 14px 20px; text-align: center; font-size: 11px;">
        &copy; ${new Date().getFullYear()} Anjali Doors Pvt. Ltd. All rights reserved. &bull; G-3/11, MIDC Tarapur, Boisar, Palghar - 401 506
      </div>
    </div>
  `;
}

/**
 * Dispatch all 3 emails for a form submission:
 *  1. integralwebsolution@gmail.com (Admin 1)
 *  2. mayurkulkarni@anjalidoor.com (Admin 2)
 *  3. user's entered email (Customer Acknowledgment)
 */
async function dispatchThreeEmails({ type, data }) {
  const mailer = await getTransporter();
  const customerEmail = data.email && data.email.trim();

  const adminSubject = type === 'quote'
    ? `[Quote Request] ${data.doorType || 'Doors'} - ${data.name} (${data.company || 'Individual'})`
    : `[Website Inquiry] ${data.subject || data.product || 'Inquiry'} - ${data.name}`;

  const customerSubject = `Thank You for Contacting Anjali Doors Pvt. Ltd.`;

  const adminHtml = buildAdminNotificationHtml({ type, data });
  const customerHtml = buildCustomerAcknowledgmentHtml({ type, data });

  // Email 1: integralwebsolution@gmail.com
  const sendEmail1 = mailer.sendMail({
    from: `"Anjali Doors Portal" <${SENDER_EMAIL}>`,
    to: 'integralwebsolution@gmail.com',
    replyTo: customerEmail || undefined,
    subject: adminSubject,
    html: adminHtml,
  });

  // Email 2: mayurkulkarni@anjalidoor.com
  const sendEmail2 = mailer.sendMail({
    from: `"Anjali Doors Portal" <${SENDER_EMAIL}>`,
    to: 'mayurkulkarni@anjalidoor.com',
    replyTo: customerEmail || undefined,
    subject: adminSubject,
    html: adminHtml,
  });

  // Email 3: customer's entered email
  let sendEmail3 = Promise.resolve({ skipped: true, reason: 'No customer email provided' });
  if (customerEmail && customerEmail.includes('@')) {
    sendEmail3 = mailer.sendMail({
      from: `"Anjali Doors" <${SENDER_EMAIL}>`,
      to: customerEmail,
      subject: customerSubject,
      html: customerHtml,
    });
  }

  // Execute all 3 dispatches concurrently
  const [res1, res2, res3] = await Promise.allSettled([sendEmail1, sendEmail2, sendEmail3]);

  console.log(`\n======================================================`);
  console.log(`[Mailer] 3-Email Dispatch Summary for ${data.name}:`);
  console.log(`  1. integralwebsolution@gmail.com : ${res1.status === 'fulfilled' ? 'SENT' : 'FAILED (' + res1.reason?.message + ')'}`);
  console.log(`  2. mayurkulkarni@anjalidoor.com   : ${res2.status === 'fulfilled' ? 'SENT' : 'FAILED (' + res2.reason?.message + ')'}`);
  console.log(`  3. Customer (${customerEmail}) : ${res3.status === 'fulfilled' ? 'SENT' : 'FAILED (' + res3.reason?.message + ')'}`);
  console.log(`======================================================\n`);

  let previewUrl = null;
  if (res1.status === 'fulfilled' && nodemailer.getTestMessageUrl) {
    previewUrl = nodemailer.getTestMessageUrl(res1.value);
  }

  return {
    admin1: res1.status === 'fulfilled' ? res1.value : { error: res1.reason?.message },
    admin2: res2.status === 'fulfilled' ? res2.value : { error: res2.reason?.message },
    customer: res3.status === 'fulfilled' ? res3.value : { error: res3.reason?.message },
    previewUrl,
  };
}

/**
 * Handle Contact Form Submission
 */
async function sendContactEmail(formData) {
  return await dispatchThreeEmails({ type: 'contact', data: formData });
}

/**
 * Handle Quote Request Submission
 */
async function sendQuoteEmail(formData) {
  return await dispatchThreeEmails({ type: 'quote', data: formData });
}

/**
 * Handle Newsletter Subscription
 */
async function sendNewsletterEmail(subscriberEmail) {
  const mailer = await getTransporter();

  const adminMail = mailer.sendMail({
    from: `"Anjali Doors Portal" <${SENDER_EMAIL}>`,
    to: 'integralwebsolution@gmail.com, mayurkulkarni@anjalidoor.com',
    subject: `[New Newsletter Subscriber] ${subscriberEmail}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #00381f;">New Newsletter Subscription</h2>
        <p>A new subscriber has signed up on the official Anjali Doors website:</p>
        <p><strong>Email:</strong> <a href="mailto:${subscriberEmail}">${subscriberEmail}</a></p>
      </div>
    `,
  });

  const userMail = mailer.sendMail({
    from: `"Anjali Doors" <${SENDER_EMAIL}>`,
    to: subscriberEmail,
    subject: `Welcome to Anjali Doors Updates`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #00381f;">Welcome to Anjali Doors Pvt. Ltd.</h2>
        <p>Thank you for subscribing to our updates on ARAI-certified steel doors, fire protection standards, and industrial innovations.</p>
        <p>For urgent requirements, reach us at <a href="tel:+919823521791">+91 9823521791</a> or <a href="mailto:mayurkulkarni@anjalidoor.com">mayurkulkarni@anjalidoor.com</a>.</p>
      </div>
    `,
  });

  return await Promise.allSettled([adminMail, userMail]);
}

module.exports = {
  sendContactEmail,
  sendQuoteEmail,
  sendNewsletterEmail,
  dispatchThreeEmails,
};
