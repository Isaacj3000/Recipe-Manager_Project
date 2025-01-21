const Recipe = require('../models/recipe');
const recipes = require('../data/recipes');


async function seedData(req, res) {
    try {
        await recipe.insertMany(recipes);
        res.status(201).send('Recipes seeded successfully')
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error seeding recipe')
    }
}

module.exports = { seedData }
