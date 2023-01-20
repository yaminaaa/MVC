const productModel = require('../../models/product');

const controller = {
    show: (request, response) => {
        // prépare les données
        // récupérer la chaussure qui à le nom fourni
        const shoe = productModel.getOneByName(request.params.productName);
        console.log(shoe);
        // on fournit les données à la vue
        response.render('shoe.ejs', {
            shoe // shoe: shoe
        });
    }
};

module.exports = controller;