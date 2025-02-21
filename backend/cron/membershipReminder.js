const cron = require('node-cron');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

cron.schedule('* * * * *', async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const usersToNotify = await User.find({
        membershipExpiry: { $lte: tomorrow }
    });
    console.log(usersToNotify)
    for (let user of usersToNotify) {
        await sendEmail(
            user.email,
            'Membership Expiry Reminder',
            `Hello ${user.name}, your gym membership expires soon. Please renew to continue enjoying our facilities!`
        );
    }

    console.log('Membership reminder emails sent!');
});
