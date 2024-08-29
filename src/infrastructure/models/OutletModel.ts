import {OutletProductModel} from "./OutletProductModel";

export interface OutletModel {
    id: number;
    url: string;
    title: string;
    description: string;
    products?: OutletProductModel[] | null;
}

export const outletsData: OutletModel[] = [
    {
        id: 1,
        url: 'https://f.nooncdn.com/food_production/food/restaurant/partner_41214/pizzainntalabatdisplayphoto_24Feb2022075759.jpeg',
        title: 'The Gourmet Bistro',
        description: 'A fine dining restaurant offering a diverse menu of gourmet dishes and a curated wine list.',
    },
    {
        id: 2,
        url: 'https://f.nooncdn.com/food_production/food/restaurant/partner_37264/karaz_10Aug2022121213.jpeg',
        title: 'Mama’s Kitchen',
        description: 'Cozy family-owned spot known for its homemade comfort food and warm atmosphere.',
    },
    {
        id: 3,
        url: 'https://f.nooncdn.com/food_production/food/restaurant/partner_33821/lotsalazycakeheroimage_15Jul2024091934.jpeg',
        title: 'Sushi Haven',
        description: 'Fresh and authentic sushi, sashimi, and other Japanese favorites in a modern setting.',
    },
    {
        id: 4,
        url: 'https://f.nooncdn.com/food_production/food/restaurant/partner_32833/coverphotofomoburger_22Jul2024111652.jpeg',
        title: 'Vegan Delight',
        description: 'Innovative vegan dishes made with fresh, locally sourced ingredients in a chic environment.',
    },
    {
        id: 5,
        url: 'https://f.nooncdn.com/food_production/food/restaurant/partner_89298/turkishkitchenbanner3_08Sep2023095826.jpeg',
        title: 'The Grill House',
        description: 'Casual eatery specializing in grilled meats, burgers, and hearty sides.',
    },
];