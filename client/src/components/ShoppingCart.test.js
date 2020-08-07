import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

//Created Mock plant data to test rendering of shopping cart
const plants = [
    {
    name:'Peperomia Rosso',
    id: 143,
    scientificName: "Peperomia caperata rosso",
    difficulty: "easy",
    light: "direct",
    img:"https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    sizes: ["small"],
    watering: 2,
    description:"Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
    price: 21
    },
    {
    name: "String of Dolphins",
    id: 125341,
    scientificName:"Senecio peregrinus",
    difficulty: "easy",
    light: "direct",
    img: "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
    sizes:["small"],
    watering: 2,
    description: "Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins. Flipper hails from South Africa, so he thrives in warm environments with lots of sun. This dolphin doesn't need too much water to thrive, making him low maintenance and easy to love.",
    price: 15}
]
    

test("displays plants in cart", () => {
  //STEP 1: Render Shopping Cart with mock plant data in it
    const { getByText } = render(<ShoppingCart cart={plants} />)
// STEP 2: Assert
    expect(screen.getByText(/peperomia rosso/i));
    expect(screen.getByText(/string of dolphins/i));
})