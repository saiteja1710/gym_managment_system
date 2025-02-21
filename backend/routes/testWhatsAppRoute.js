const express = require('express');
const sendWhatsApp = require('../utils/sendWhatsApp')

const router = express.Router();

router.get('/test-whatsapp', async (req, res) => {
    try {
        await sendWhatsApp('+917013788446', 'Hi Livan Kumar 🚀');
        res.status(200).json({ message: 'Test WhatsApp message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send test WhatsApp message', error: error.message });
    }
});

module.exports = router;
