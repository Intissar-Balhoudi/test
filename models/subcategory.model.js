const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Category = require('./category.model');

const SubCategory = sequelize.define('SubCategory', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

SubCategory.belongsTo(Category, { foreignKey: 'categoryId', onDelete: 'CASCADE' });
Category.hasMany(SubCategory, { foreignKey: 'categoryId' });

module.exports = SubCategory;
