const categories = [
	{
		name : "Au travail",
		textLabel: "C'est parti",
		image: "categ2.jpeg",
		position: 1
	},
	{
		name : "Cérémonie",
		textLabel: "Bien choisir",
		image: "categ3.jpeg",
		position: 5
	},
	{
		name : "Chausson",
		textLabel: "Confortable",
		image: null,
		position: null
	},
	{
		name : "Détente",
		textLabel: "Se faire plaisir",
		image: "categ1.jpeg",
		position: 4
	},
	{
		name : "Sortir",
		textLabel: "Faire un tour",
		image: "categ4.jpeg",
		position: 3
	},
	{
		name : "Tong",
		textLabel: "Tout pour mes tongs",
		image: null,
		position: null
	},
	{
		name : "Vintage",
		textLabel: "Découvrir",
		image: "categ5.jpeg",
		position: 2
	},
	{
		name : "Sport",
		textLabel: "Plus haut",
		image: null,
		position: null
	},
];

module.exports = {
    getAll: () => {
        return categories;
    },
    getCategoriesForHomePage: () => {
        const categoriesForHomepage = [];

        // on parcourt toutes les catégories
        // si l'index n'est pas nul, on l'ajoute au tableau
        for (const currentCategory of categories) {
            if (currentCategory.position !== null) {
                categoriesForHomepage[currentCategory.position] = currentCategory
            }
        }
        return categoriesForHomepage;
    },
	getOneByName: (name) => {
		for (const currentCategory of categories) {
			if (currentCategory.name.toLowerCase() === name.toLowerCase()) {
				return currentCategory;
			}
		}

		// si on arrive après la boucle cela veut dire que l'on n'a pas trouvé l'élément
		return false;
	}
};