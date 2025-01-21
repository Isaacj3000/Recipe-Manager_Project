const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true, trim: true },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    category: { 
        type: String, 
        required: true, 
        enum: ['breakfast', 'lunch', 'dinner', 'supper', 'dessert', 'snack'] 
    },
    ingredients: [{ type: String, required: true, trim: true }], // List of ingredient names
    comments: [commentSchema], // Comments embedded as subdocuments
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;