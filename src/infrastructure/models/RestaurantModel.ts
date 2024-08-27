export interface RestaurantModel {
    id: number;
    url: string;
    title: string;
    description: string;
}

export const restaurantsData: RestaurantModel[] = [
    {
        id: 1,
        url: 'https://via.placeholder.com/800x400.png?text=The+Gourmet+Bistro',
        title: 'The Gourmet Bistro',
        description: 'A fine dining restaurant offering a diverse menu of gourmet dishes and a curated wine list.',
    },
    {
        id: 2,
        url: 'https://via.placeholder.com/800x400.png?text=Mama’s+Kitchen',
        title: 'Mama’s Kitchen',
        description: 'Cozy family-owned spot known for its homemade comfort food and warm atmosphere.',
    },
    {
        id: 3,
        url: 'https://via.placeholder.com/800x400.png?text=Sushi+Haven',
        title: 'Sushi Haven',
        description: 'Fresh and authentic sushi, sashimi, and other Japanese favorites in a modern setting.',
    },
    {
        id: 4,
        url: 'https://via.placeholder.com/800x400.png?text=Vegan+Delight',
        title: 'Vegan Delight',
        description: 'Innovative vegan dishes made with fresh, locally sourced ingredients in a chic environment.',
    },
    {
        id: 5,
        url: 'https://via.placeholder.com/800x400.png?text=The+Grill+House',
        title: 'The Grill House',
        description: 'Casual eatery specializing in grilled meats, burgers, and hearty sides.',
    },
];