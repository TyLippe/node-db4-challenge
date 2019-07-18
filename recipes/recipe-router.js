const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const router = express.Router();

//Get all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await db('recipes');
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get shopping list of a recipe
router.get('/:id/list', async (req, res) => {

});

//Get instructions of a recipe
router.post('/:id/steps', async (req, res) => {

});

module.exports = router;
