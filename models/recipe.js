const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true, trim: true },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false //  Allows guest comments
    }
}, { timestamps: true });

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true }, // Changed 'name' to 'title'
    category: { 
        type: String, 
        required: true, 
        enum: ['breakfast', 'lunch', 'dinner', 'supper', 'dessert', 'snack'] 
    },
    ingredients: [{
        name: { type: String, required: true, trim: true },
        quantity: { type: String, required: false, trim: true } // Allows optional quantity
    }],
    rating: { type: Number, min: 1, max: 5, default: 3 }, // Added rating field
    comments: [commentSchema], // Embedded comments as subdocuments
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;