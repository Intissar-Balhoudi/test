const express = require('express');
const { getAllSubCategories, createSubCategory } = require('../controllers/subcategory.controller');
const router = express.Router();

router.get('/', getAllSubCategories);
router.post('/', createSubCategory);

module.exports = router;
