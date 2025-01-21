const router = require('express').Router();
const recipeCtrl = require('../controllers/recipe');

router.get('/recipes', recipeCtrl.index);
router.get('/recipes/new', recipeCtrl.newRecipe);
router.post('/recipes', recipeCtrl.postRecipe);
router.post('/recipes/:id/comments', recipeCtrl.addComment);
router.get('/recipes/:id', recipeCtrl.showRecipe);
router.get('/recipes/:id/edit', recipeCtrl.editRecipe);
router.put('/recipes/:id', recipeCtrl.updateRecipe);
router.delete('/recipes/:id', recipeCtrl.deleteRecipe);




module.exports = router;