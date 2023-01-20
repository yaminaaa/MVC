const shoes = [
	{
		name: "Kissing",
		image: "1-kiss",
		price: 40,
		categories: [
			"Chausson",
			"Détente"
		],
	},
	{
		name: "Pink Lady",
		image: "2-rose",
		price: 20,
		categories: [
			"Tong",
			"Détente"
		],
	},
	{
		name: "Chausson",
		image: "3-panda",
		price: 50,
		categories: [
			"Chausson",
			"Détente"
		],
	},
	{
		name: "Deadpool",
		image: "20-deadpool",
		price: 15,
		categories: [
			"Pantoufle",
			"Détente"
		],
	},
	{
		name: "Converse",
		image: "21-converse",
		price: 150,
		categories: [
			"Vintage",
		],
	},
	{
		name: "Jordan 5",
		image: "23-jordan",
		price: 300,
		categories: [
			"Vintage",
		],
	},
	{
		name: "Paillettes",
		image: "26-oCirage",
		price: 475,
		categories: [
			"Cérémonie",
			"Sortir",
		],
	},
];

module.exports = {
    getAll : () => {
        return shoes;
    },
	getListForCategory : function (categoryName) {
        const productsInCategory = [];

        // on parcourt toutes les chaussures
        for (const currentShoe of shoes) {
			// Pour chaque category de la chaussure
			for (currentCategory of currentShoe.categories) {
				// Si le nom correspond au nom fourni
				if (currentCategory.toLowerCase() === categoryName.toLowerCase()) {
					// alors on ajoute le produit au tableau
					productsInCategory.push(currentShoe);
				}
			}
        }
        return productsInCategory;
	},
	getOneByName: (name) => {
		for (const currentShoe of shoes) {
			if (currentShoe.name.toLowerCase() === name.toLowerCase()) {
				return currentShoe;
			}
		}

		// si on arrive après la boucle cela veut dire que l'on n'a pas trouvé l'élément
		return false;
	}
};