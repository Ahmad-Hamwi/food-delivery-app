export interface OutletProductModel {
    id: number;
    name: string;
    description: string;
    outletId: number;
    price: number;
    image: string;
}

export const outletProducts: { [outletId: number]: OutletProductModel[] } = {
    1: [ // The Gourmet Bistro
        {
            id: 1,
            name: 'Truffle Risotto',
            description: 'Creamy risotto with black truffle shavings and a touch of parmesan.',
            outletId: 1,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_41214/pizzainntalabatdisplayphoto_24Feb2022075759.jpeg"
        },
        {
            id: 2,
            name: 'Beef Wellington',
            description: 'Tender beef wrapped in puff pastry with a mushroom duxelles and prosciutto.',
            outletId: 1,
            price: 110,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_37264/karaz_10Aug2022121213.jpeg"
        },
        {
            id: 3,
            name: 'Lobster Bisque',
            description: 'Rich and velvety bisque made from lobster and cream, garnished with fresh herbs.',
            outletId: 1,
            price: 30,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_33821/lotsalazycakeheroimage_15Jul2024091934.jpeg"
        },
        {
            id: 4,
            name: 'Duck Confit',
            description: 'Slow-cooked duck leg served with roasted vegetables and a red wine reduction.',
            outletId: 1,
            price: 80,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_32833/coverphotofomoburger_22Jul2024111652.jpeg"
        },
        {
            id: 5,
            name: 'Chocolate Soufflé',
            description: 'Decadent chocolate soufflé with a molten center, served with a raspberry coulis.',
            outletId: 1,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_89298/turkishkitchenbanner3_08Sep2023095826.jpeg"
        }
    ],
    2: [ // Mama’s Kitchen
        {
            id: 6,
            name: 'Classic Meatloaf',
            description: 'Homemade meatloaf served with mashed potatoes and gravy.',
            outletId: 2,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_41214/pizzainntalabatdisplayphoto_24Feb2022075759.jpeg"
        },
        {
            id: 7,
            name: 'Chicken Pot Pie',
            description: 'Flaky pastry filled with a creamy mixture of chicken, vegetables, and herbs.',
            outletId: 2,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_41214/pizzainntalabatdisplayphoto_24Feb2022075759.jpeg"
        },
        {
            id: 8,
            name: 'Macaroni and Cheese',
            description: 'Baked macaroni with a cheesy sauce, topped with a crispy breadcrumb crust.',
            outletId: 2,
            price: 40,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_41214/pizzainntalabatdisplayphoto_24Feb2022075759.jpeg"
        },
        {
            id: 9,
            name: 'Beef Stroganoff',
            description: 'Tender beef strips in a creamy mushroom sauce, served over egg noodles.',
            outletId: 2,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_37264/karaz_10Aug2022121213.jpeg"
        },
        {
            id: 10,
            name: 'Apple Pie',
            description: 'Traditional apple pie with a buttery crust and a scoop of vanilla ice cream.',
            outletId: 2,
            price: 30,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_33821/lotsalazycakeheroimage_15Jul2024091934.jpeg"
        }
    ],
    3: [ // Sushi Haven
        {
            id: 11,
            name: 'Spicy Tuna Roll',
            description: 'Spicy tuna with cucumber and avocado, wrapped in sushi rice and nori.',
            outletId: 3,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_32833/coverphotofomoburger_22Jul2024111652.jpeg"
        },
        {
            id: 12,
            name: 'Salmon Sashimi',
            description: 'Freshly sliced salmon served with soy sauce, wasabi, and pickled ginger.',
            outletId: 3,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_89298/turkishkitchenbanner3_08Sep2023095826.jpeg"
        },
        {
            id: 13,
            name: 'Tempura Udon',
            description: 'Thick udon noodles in a savory broth with crispy tempura shrimp and vegetables.',
            outletId: 3,
            price: 20,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_41214/pizzainntalabatdisplayphoto_24Feb2022075759.jpeg"
        },
        {
            id: 14,
            name: 'Ebi Nigiri',
            description: 'Sushi rice topped with tender, lightly seared shrimp.',
            outletId: 3,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_37264/karaz_10Aug2022121213.jpeg"
        },
        {
            id: 15,
            name: 'Dragon Roll',
            description: 'A roll filled with eel and avocado, topped with thin slices of avocado and a sweet eel sauce.',
            outletId: 3,
            price: 40,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_33821/lotsalazycakeheroimage_15Jul2024091934.jpeg"
        }
    ],
    4: [ // Vegan Delight
        {
            id: 16,
            name: 'Stuffed Bell Peppers',
            description: 'Bell peppers filled with a quinoa and black bean mixture, topped with avocado and salsa.',
            outletId: 4,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_32833/coverphotofomoburger_22Jul2024111652.jpeg"
        },
        {
            id: 17,
            name: 'Zucchini Noodles with Pesto',
            description: 'Spiralized zucchini noodles tossed with a fresh basil pesto.',
            outletId: 4,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_89298/turkishkitchenbanner3_08Sep2023095826.jpeg"
        },
        {
            id: 18,
            name: 'Sweet Potato and Chickpea Curry',
            description: 'A flavorful curry with sweet potatoes, chickpeas, and a blend of spices.',
            outletId: 4,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_41214/pizzainntalabatdisplayphoto_24Feb2022075759.jpeg"
        },
        {
            id: 19,
            name: 'Vegan Tacos',
            description: 'Soft corn tortillas filled with spiced lentils, shredded cabbage, and a lime crema.',
            outletId: 4,
            price: 50,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_37264/karaz_10Aug2022121213.jpeg"
        },
        {
            id: 20,
            name: 'Raw Chocolate Avocado Mousse',
            description: 'A rich and creamy chocolate mousse made with avocado and cocoa powder.',
            outletId: 4,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_33821/lotsalazycakeheroimage_15Jul2024091934.jpeg"
        }
    ],
    5: [ // The Grill House
        {
            id: 21,
            name: 'BBQ Ribs',
            description: 'Tender pork ribs coated in a smoky BBQ sauce, served with coleslaw and cornbread.',
            outletId: 5,
            price: 60,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_32833/coverphotofomoburger_22Jul2024111652.jpeg"
        },
        {
            id: 22,
            name: 'Cheeseburger',
            description: 'Juicy beef patty with cheddar cheese, lettuce, tomato, and pickles on a toasted bun.',
            outletId: 5,
            price: 10,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_89298/turkishkitchenbanner3_08Sep2023095826.jpeg"
        },
        {
            id: 23,
            name: 'Grilled Portobello Mushrooms',
            description: 'Marinated portobello mushrooms grilled to perfection, served with a side of garlic mashed potatoes.',
            outletId: 5,
            price: 70,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_41214/pizzainntalabatdisplayphoto_24Feb2022075759.jpeg"
        },
        {
            id: 24,
            name: 'BBQ Chicken Wings',
            description: 'Crispy chicken wings tossed in a tangy BBQ sauce.',
            outletId: 5,
            price: 120,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_37264/karaz_10Aug2022121213.jpeg"
        },
        {
            id: 25,
            name: 'Loaded Nachos',
            description: 'Tortilla chips topped with melted cheese, jalapeños, black beans, and a dollop of sour cream.',
            outletId: 5,
            price: 120,
            image: "https://f.nooncdn.com/food_production/food/restaurant/partner_33821/lotsalazycakeheroimage_15Jul2024091934.jpeg"
        }
    ]
};

export const productsFlat = [
    outletProducts[1],
    outletProducts[2],
    outletProducts[3],
    outletProducts[4],
    outletProducts[5],
].flat()