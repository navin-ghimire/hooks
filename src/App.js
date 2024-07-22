import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/recipes');
      setData(response.data);
    } catch (err) {
      console.error("Error fetching data: ", err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data && (
        <div className='grid grid-cols-3 space-y-2 p-3'>
          {data.recipes.map((recipe) => {
            return (
              <div key={recipe.id}>
                <img src={recipe.image} alt="" />
                <h1>{recipe.name}</h1>
                <h1>Ingredients</h1>
                {recipe.ingredients.map((ing, i) => {
                  return <p key={i}>{`${i + 1}. ${ing}`}</p>;
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;