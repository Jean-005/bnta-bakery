import React, { useState } from 'react';
import Cake from './components/Cake';
import AverageRating from './components/AverageRating';
import './index.css';

const App = () => {
  const [cakes, setCakes] = useState([
    {
      cakeName: "Victoria Sponge",
      ingredients: ["eggs", "butter", "sugar", "self-raising flour", "baking powder", "milk"],
      price: 5,
      rating: 5
    },
    {
      cakeName: "Tea Loaf",
      ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
      price: 2,
      rating: 3
    },
    {
      cakeName: "Carrot Cake",
      ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
      price: 8,
      rating: 5
    }
  ]);

  const averageRating = cakes.reduce((acc, cake) => acc + cake.rating, 0) / cakes.length;

  return (
    <div>
      {cakes.map((cake, index) => (
        <Cake key={index} cake={cake} />
      ))}
      <AverageRating averageRating={averageRating} />
    </div>
  );
};


export default App;
