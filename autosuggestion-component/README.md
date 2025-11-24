# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




fetch data 

{

  "recipes": [

    {
      "id": 1,
      "name": "Classic Margherita Pizza",
      "ingredients": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
      "prepTimeMinutes": 20,
      "cookTimeMinutes": 15,
      "servings": 4,
      "difficulty": "Easy",
      "cuisine": "Italian",
      "caloriesPerServing": 300,
      "tags": [
        "Pizza",
        "Italian"
      ],
      "userId": 166,
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
      "rating": 4.6,
      "reviewCount": 98,
      "mealType": [
        "Dinner"
      ]
    },


    {
      "id": 45,
      "name": "Italian Margherita Pizza",
      "ingredients": [
        "Pizza dough",
        "Tomatoes, thinly sliced",
        "Fresh mozzarella, sliced",
        "Fresh basil leaves",
        "Olive oil",
        "Garlic, minced",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Preheat the oven to the highest temperature your oven can go.",
        "Roll out pizza dough on a floured surface and transfer to a pizza stone or baking sheet.",
        "Brush the dough with olive oil and sprinkle minced garlic over the surface.",
        "Arrange thinly sliced tomatoes and fresh mozzarella slices on the dough.",
        "Bake until the crust is golden and the cheese is melted and bubbly.",
        "Top with fresh basil leaves and season with salt and pepper. Slice and serve this classic Margherita Pizza."
      ],
      "prepTimeMinutes": 20,
      "cookTimeMinutes": 12,
      "servings": 4,
      "difficulty": "Easy",
      "cuisine": "Italian",
      "caloriesPerServing": 280,
      "tags": [
        "Margherita pizza",
        "Italian",
        "Quick"
      ],
      "userId": 160,
      "image": "https://cdn.dummyjson.com/recipe-images/45.webp",
      "rating": 4.7,
      "reviewCount": 98,
      "mealType": [
        "Dinner"
      ]
    }

  ],
  
  "total": 2,
  "skip": 0,
  "limit": 2
}