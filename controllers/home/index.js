const categoryModel = require('../../models/category');

const controller = {
    homepage: (request, response) => {
        // prépare les données
        const homepageCategories = categoryModel.getCategoriesForHomePage();

        console.log(homepageCategories);
        // on fournit les données à la vue
        response.render('index.ejs', {
            categoryList: homepageCategories
        });
    }
};

module.exports = controller;