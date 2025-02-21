const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true }, // Example: Monthly, Quarterly, Yearly
    description: { type: String }
});

module.exports = mongoose.model('Package', PackageSchema);
