const recipes = [
    // Breakfast Recipes
    {
      id: 1,
      name: "Avocado Toast with Poached Egg",
      category: "Breakfast",
      ingredients: [
        "1 slice of whole-grain bread",
        "1/2 avocado, mashed",
        "1 poached egg",
        "Salt and pepper to taste"
      ],
      instructions: "Toast the bread, spread mashed avocado, top with poached egg, and season.",
      rating: 5
    },
    {
      id: 2,
      name: "Blueberry Pancakes",
      category: "Breakfast",
      ingredients: [
        "1 cup flour",
        "2 tbsp sugar",
        "1 tsp baking powder",
        "1/2 cup milk",
        "1 egg",
        "1/2 cup blueberries"
      ],
      instructions: "Mix ingredients, fold in blueberries, and cook on a hot griddle.",
      rating: 4
    },
    {
       id: 3,
       name: "Vegetable Pancakes",
       category: "Breakfast",
       ingredients: [
        "1⁄2 cup all-purpose flour",
        "1⁄2 teaspoon baking powder",
        "1⁄2 teaspoon salt",
        "1⁄4 teaspoon pepper",
        "1 egg",
        "1⁄4 cup milk",
        "1 cup grated carrot",
        "1 cup grated zucchini",
        "2 green onions, sliced",   
        "2 tablespoons oil",
     ],
     instructions: "Mix flour, baking powder, salt, and pepper.In a separate bowl, combine egg, milk, carrots, zucchini, and onions. Stir wet ingredients into dry until combined. Heat oil in a skillet over medium heat. Drop batter by tablespoons and cook pancakes for 2 minutes per side until golden. Add oil as needed. Serve immediately.",
     rating: 4
    },
    {
        id: 4,
        name: "Granola and Yogurt Parfait",
        category: "Breakfast",
        ingredients: [
            "1 cup plain or flavored yogurt (vanilla or Greek yogurt works well)",
            "1/2 cup granola",
            "1/2 cup fresh fruit (strawberries, blueberries, or bananas",
            "1 tablespoon Agave",
        ],
        instructions: "Layer yogurt, granola, and fresh fruit in a glass. Repeat layers, ending with fruit. Drizzle with honey if desired. Serve immediately or chill.",
        rating: 4
    },
    {
        id: 5,
        name: "Banana Smoothie Bowl",
        category: "Breakfast",
        ingredients: [
            "2 ripe bananas (frozen for creamier texture)",
            "1/2 cup milk or plant-based alternative",
            "1 tablespoon honey or maple syrup",
            "1/4 cup granola",
            "1 tablespoon chia seeds",
            "Fresh fruit toppings (sliced bananas, berries, or kiwi)",
            "1 tablespoon nut butter",
        ],
        instructions: "Blend frozen bananas with milk until smooth. Pour into a bowl and top with granola, fresh fruit, chia seeds, and optional nut butter.",
        rating: 3
    },
    {
        id: 6,
        name: "French Toast",
        category: "Breakfast",
        ingredients: [
            "2 large eggs",
            "1/2 cup milk",
            "1 tablespoon sugar",
            "1/2 teaspoon vanilla extract",
            "1/4 teaspoon cinnamon",
            "4 slices of bread",
            "Butter or oil for cooking",
        ],
        instructions: "Whisk eggs, milk, sugar, vanilla, and cinnamon. Dip bread slices in the mixture and cook on a buttered skillet until golden brown on both sides. Serve warm with syrup or toppings.",
        rating: 5
    },

// LUNCH RECIPES
{
      id: 7,
      name: "Chicken Caesar Wrap",
      category: "Lunch",
      ingredients: [
        "1 tortilla wrap",
        "Grilled chicken slices",
        "Romaine lettuce",
        "Caesar dressing",
        "Parmesan cheese"
      ],
      instructions: "Layer chicken, lettuce, cheese, and dressing on the wrap. Roll and serve.",
      rating: 4
    },
    {
        id: 8,
        name: "Caprese Salad",
        category: "Lunch",
        ingredients: [
            "Fresh mozzarella",
            "Tomatoes",
            "Basil leaves",
            "Balsamic glaze"
        ],
        ingredients: "Slice tomatoes and mozzarella. Arrange them alternately on a plate with basil leaves. Drizzle with balsamic glaze.",
        rating: 3.5
    },
    {
        id: 9,
        name: "Greek Quinoa Salad",
        category: "lunch",
        ingredients: ["1 cup cooked quinoa",
            "Cucumber",
            "Feta cheese",
            "Olives",
            "Olive oil",
            "Lemon juice"
        ],
        instructions: "Mix cooked quinoa with chopped cucumber, feta, and olives. Drizzle with olive oil and lemon juice.",
        rating: 3.5
  },
  {
    id: 10,
    name: "Pulled Pork Sandwich",
    category: "lunch",
    ingredients: [
        "Slow-cooked pork",
         "Barbecue sauce",
          "Sandwich buns"
        ],
    instructions: "Shred slow-cooked pork and mix with barbecue sauce. Serve on buns.",
    rating: 4
  },
  {
    id: 11,
    name: "Stuffed Avocados",
    category: "lunch",
    ingredients: [
        "Avocados",
         "Tuna or chicken salad"],
    instructions: "Cut avocados in half, remove the pit, and fill with tuna or chicken salad.",
    rating: 5
  },
  {
    id: 12,
    name: "Lentil Soup",
    category: "lunch",
    ingredients: [
        "Lentils",
        "Carrots",
        "Celery",
        "Onion",
        "Garlic",
        "Vegetable broth"],
    instructions: "Sauté vegetables, add lentils and broth, and simmer until lentils are tender.",
    rating: 4
},

// DINNER RECIPES
{
      id: 13,
      name: "Grilled Chicken and Vegetables",
      category: "Dinner",
      ingredients: [
        "1 chicken breast",
        "Zucchini slices",
        "Bell pepper slices",
        "Olive oil",
        "Salt and pepper"
      ],
      instructions: "Brush vegetables and chicken with oil, season, and grill until cooked.",
      rating: 5
    },
    {
        id: 14,
        name: "Beef Tacos",
        category: "dinner",
        ingredients: [
            "Ground beef",
            "Taco seasoning",
            "Taco shells",
            "Lettuce",
            "Cheese"
            ],
        instructions: "Cook beef with taco seasoning. Assemble tacos with lettuce, cheese, and beef.",
        rating: 4
      },
      {
        id: 15,
        name: "Salmon Teriyaki",
        category: "dinner",
        ingredients: [
            "Salmon fillet",
             "Teriyaki sauce"
            ],
        instructions: "Marinate salmon in teriyaki sauce. Bake or pan-sear until cooked.",
        rating: 5
      },
      {
        id: 16,
        name: "Eggplant Parmesan",
        category: "dinner",
        ingredients: [
            "Eggplant",
            "Marinara sauce",
            "Mozzarella", 
            "Parmesan", 
            "Breadcrumbs"
            ],
        instructions: "Bread and bake eggplant slices, layer with marinara and cheese, and bake until bubbly.",
        rating: 5
      },
      {
        id: 17,
        name: "Spaghetti Carbonara",
        category: "dinner",
        ingredients: [
            "Spaghetti", 
            "Bacon", 
            "Eggs", 
            "Parmesan", 
            "Black pepper"
        ],
        instructions: "Cook spaghetti. Mix with cooked bacon, beaten eggs, and cheese. Serve immediately.",
        rating: 4.5
      },
      {
        id: 18,
        name: "Shepherd’s Pie",
        category: "dinner",
        ingredients: [
            "Ground meat", 
            "Carrots", 
            "Peas", 
            "Mashed potatoes"
        ],
        instructions: "Cook meat and vegetables. Top with mashed potatoes and bake.",
        rating: 4

},
// SUPPER RECIPE
{
      id: 19,
      name: "Tomato Basil Soup with Grilled Cheese",
      category: "Supper",
      ingredients: [
        "4 tomatoes, chopped",
        "1 onion, diced",
        "1/4 cup basil leaves",
        "2 slices of bread",
        "2 slices of cheese"
      ],
      instructions: "Simmer tomatoes and onions, blend with basil, and serve with grilled cheese.",
      rating: 5
    },
    {
      id: 20,
      name: "Tomato Basil Soup with Grilled Cheese",
      category: "supper",
      ingredients: [
        "Tomatoes", 
        "Basil", 
        "Cream", 
        "Bread", 
        "Cheese"
      ],
      instructions: "Simmer tomatoes and basil, blend, and add cream. Serve with a grilled cheese sandwich.",
      rating: 2.5
    },
    {
      id: 21,
      name: "Avocado and Cucumber Sushi Rolls",
      category: "supper",
      ingredients: [
        "Sushi rice", 
        "Nori sheets", 
        "Avocado", 
        "Cucumber"
      ],
      instructions: "Place rice on nori, add avocado and cucumber, roll tightly, and slice.",
      rating: 4
    },
    {
      id: 22,
      name: "Roasted Beet and Goat Cheese Salad",
      category: "supper",
      ingredients: [
        "Beets", 
        "Goat cheese", 
        "Mixed greens", 
        "Balsamic vinaigrette"
      ],
      instructions: "Roast beets, slice, and toss with greens, cheese, and vinaigrette.",
      rating: 4
    },
    {
      id: 23,
      name: "Minestrone Soup",
      category: "supper",
      ingredients: [
        "Vegetables", 
        "Pasta", 
        "Beans", 
        "Tomato broth"
      ],
      instructions: "Simmer vegetables, beans, and pasta in tomato broth until tender.",
      rating: 3.5
    },
    {
      id: 24,
      name: "Shrimp Scampi",
      category: "supper",
      ingredients: [
        "Shrimp", 
        "Garlic", 
        "Butter", 
        "Lemon", 
        "Pasta"],
      instructions: "Cook shrimp in garlic butter, add lemon juice, and serve over pasta.",
      rating: 5
    },
    {
      id: 25,
      name: "Spinach and Feta Quesadilla",
      category: "supper",
      ingredients: [
        "Tortilla", 
        "Spinach", 
        "Feta cheese", 
        "Mozzarella"
      ],
      instructions: "Layer ingredients on a tortilla, fold, and cook until crispy.",
      rating: 4.5
    },
    {
      id: 26,
      name: "Sweet Potato and Black Bean Tacos",
      category: "supper",
      ingredients: [
        "Sweet potatoes", 
        "Black beans", 
        "Taco shells", 
        "Avocado"
      ],
      instructions: "Roast sweet potatoes, add to tacos with beans and avocado.",
      rating: 4
    }
  ];
  
  module.exports = recipes;
  