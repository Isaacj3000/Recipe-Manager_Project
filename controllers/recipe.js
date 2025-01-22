const recipes = require('../data/recipes');
const Recipe = require('../models/recipe');
const moment = require('moment')


// fetch all data
async function index(req, res) {

    try {
        if (!req.session.user) {
            return res.redirect('auth/sign-in')
        }
        const recipes = await Recipe.find({}).populate('createdBy', 'username').populate('comments.createdBy', 'username');
        const formattedRecipes = recipes.map(recipe => ({
            ...recipe.toObject(),  //
            formattedDate: moment(recipe.createdAt).fromNow()
        }))
        res.render('recipes', { title: 'recipe List ', recipes: formattedRecipe })
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
        const { name, category, ingredients } = req.body;
        const newRecipe = new Recipe({ 
            name: name,
            category: category,
            ingredients: ingredients,
            createdBy: req.session.user.id });
        await newRecipe.save();
        res.status(201).redirect('/recipe');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
}

// Show a single recipe
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
