const express = require('express');
const Package = require('../models/Package');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create a package
router.post('/add', authMiddleware, async (req, res) => {
    try {
        const { name, price, duration, description } = req.body;
        const newPackage = new Package({ name, price, duration, description });
        await newPackage.save();
        res.status(201).json({ message: 'Package created successfully', newPackage });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get all packages
router.get('/all', authMiddleware, async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update a package
router.put('/update/:id', authMiddleware, async (req, res) => {
    try {
        const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: 'Package updated successfully', updatedPackage });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Delete a package
router.delete('/delete/:id', authMiddleware, async (req, res) => {
    try {
        await Package.findByIdAndDelete(req.params.id);
        res.json({ message: 'Package deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
