const categoryModel = require('../../models/category');
const productModel = require('../../models/product');

const controller = {
    show: (request, response) => {
        // préparation des données
        // récupérer la catégorie dont le nom est fourni dans l'url 
        const categoryName = request.params.categoryName;
        const category = categoryModel.getOneByName(categoryName);
        // récupérer les produits qui appartiennent à cette catégorie
        const productList = productModel.getListForCategory(categoryName)
        console.log(productList);
        // on fournit les données à la vue
        response.render('category.ejs', {
            category,
            productList
        });
    }
};

module.exports = controller;