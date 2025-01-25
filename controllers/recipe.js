const recipes = require('../data/recipes');
const Recipe = require('../models/recipe');
const moment = require('moment')


// fetch all data
async function index(req, res) {

    try {
        if (!req.session.user) {
            return res.redirect('/auth/sign-in')
        }
        const recipes = await Recipe.find({}).populate('createdBy', 'username').populate('comments.createdBy', 'username');
        const formattedRecipes = recipes.map(recipe => ({
            ...recipe.toObject(),  // corrected recipe to object
            formattedDate: moment(recipe.createdAt).fromNow()
        }))
        res.render('recipes', { title: 'Recipe List ', recipes: formattedRecipes, 
            user: req.session.user}) // Pass user session to check authentication
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }
}
// Render new recipe form
function newRecipe(req, res) {
    res.render('recipes/new', { title: 'New Recipe' });
}

// Add a new recipe
async function postRecipe(req, res) {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: "Unauthorized: Please log in" });
        }

        const { title, category, ingredients } = req.body;

        // Ensure ingredients is an array of objects
        let formattedIngredients;
        if (typeof ingredients === "string") {
            formattedIngredients = ingredients.split(',').map(ing => ({ name: ing.trim() }));
        } else {
            formattedIngredients = ingredients; // If already an array, use as-is
        }

        const newRecipe = new Recipe({ 
            title,
            category,
            ingredients: formattedIngredients, 
            createdBy: req.session.user.id 
        });

        await newRecipe.save();
        console.log("Recipe created:", newRecipe); // Debugging log

        // Redirect to correct route
        res.status(201).redirect('/recipes'); // Ensure this matches your GET route

    } catch (error) {
        console.error("Error creating recipe:", error.message);
        res.status(500).send('Internal Server Error');
    }
}
// Show a recipe
async function showRecipe(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id).populate('comments.createdBy');
        if (recipe) {
            res.render('recipes/show', { title: 'Recipe Details', recipe });
        } else {
            res.status(404).render('404/notFound', { title: 'Recipe Not Found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
}

// Add a comment to a recipe
async function addComment(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id);
        const newComment = {
            content: req.body.content,
            createdBy: req.session.user.id
        };
        recipe.comments.push(newComment);
        await recipe.save();
        res.redirect(`/recipes/${req.params.id}`);
    } catch (error) {
        console.error('Error adding new comment:', error);
        res.status(500).send('Internal Server Error');
    }
}

// Render edit form
async function editRecipe(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (recipe) {
            res.render('recipes/edit', { title: 'Edit Recipe', recipe });
        } else {
            res.status(404).render('404/notFound', { title: 'Recipe Not Found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
}

// Update a recipe
async function updateRecipe(req, res) {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedRecipe) {
            res.redirect(`/recipes/${req.params.id}`);
        } else {
            res.status(404).render('404/notFound', { title: 'Recipe Not Found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
}

// Delete a recipe
async function deleteRecipe(req, res) {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (deletedRecipe) {
            res.redirect('/recipes');
        } else {
            res.status(404).render('404/notFound', { title: 'Recipe Not Found' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { index, newRecipe, postRecipe, showRecipe, addComment, editRecipe, updateRecipe, deleteRecipe };
