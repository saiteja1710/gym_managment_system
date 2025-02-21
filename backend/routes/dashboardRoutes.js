const express = require('express');
const User = require('../models/User');
const Package = require('../models/Package');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Dashboard analytics
router.get('/analytics', authMiddleware, async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const activeMemberships = await User.countDocuments({
            membershipExpiry: { $gte: new Date() }
        });
        const expiredMemberships = await User.countDocuments({
            membershipExpiry: { $lt: new Date() }
        });
        const totalPackages = await Package.countDocuments();

        res.json({
            totalUsers,
            activeMemberships,
            expiredMemberships,
            totalPackages
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
