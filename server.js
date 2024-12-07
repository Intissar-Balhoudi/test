const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const categoryRoutes = require('./routes/category.routes');
const subcategoryRoutes = require('./routes/subcategory.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subcategoryRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
});



/* Étape 7: Création de la Base de Données
Exécutez les commandes suivantes dans votre base de données MySQL :

sql
Copier le code
CREATE DATABASE nom_de_la_base; */