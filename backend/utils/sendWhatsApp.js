const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;

const client = twilio(accountSid, authToken);

/**
 * Send a WhatsApp message.
 * @param {string} to - The recipient's WhatsApp number (e.g., whatsapp:+1234567890).
 * @param {string} message - The message to be sent.
 */
const sendWhatsApp = async (to, message) => {
    try {
        const response = await client.messages.create({
            from: fromWhatsAppNumber,  
            to: `whatsapp:${to}`,     // Ensure 'whatsapp:' prefix for the recipient number
            body: message,
        });
        console.log('WhatsApp message sent successfully:', response.sid);
    } catch (error) {
        console.error('Error sending WhatsApp message:', error.message);
    }
};

module.exports = sendWhatsApp;
