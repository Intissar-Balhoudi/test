const SubCategory = require('../models/subcategory.model');

exports.getAllSubCategories = async (req, res) => {
  try {
    const subcategories = await SubCategory.findAll({ include: 'Category' });
    res.status(200).json(subcategories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching subcategories', error: err.message });
  }
};

exports.createSubCategory = async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    const subcategory = await SubCategory.create({ name, categoryId });
    res.status(201).json(subcategory);
  } catch (err) {
    res.status(500).json({ message: 'Error creating subcategory', error: err.message });
  }
};
