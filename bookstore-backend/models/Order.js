const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    books: [
        {
            bookId: { type: mongoose.Schema.Types.ObjectId, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    total: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
