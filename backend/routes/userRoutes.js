const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new user
router.post('/add', async (req, res) => {
    try {
        const { name, email, phone, packageType,membershipExpiry} = req.body;
        console.log(packageType)
        const user = new User({ name, email, phone, packageType,membershipExpiry });
        await user.save();
        res.status(201).json({ message: 'User added successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get all users
router.get('/all', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update user
router.put('/update/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Delete user
router.delete('/delete/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/membership-expiry', authMiddleware, async (req, res) => {
    try {
        const expiredUsers = await User.find({
            membershipExpiry: { $lte: new Date() }
        }).populate('package');

        res.json(expiredUsers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});


module.exports = router;
