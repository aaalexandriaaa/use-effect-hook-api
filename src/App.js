import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';
require('dotenv').config()
const MY_APP_ID = process.env.REACT_APP_APP_ID;
const MY_APP_KEY = process.env.REACT_APP_APP_KEY;

const App = () => {
  const API_URL = `https://api.edamam.com/search?q=banana&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}`;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadData();
  });


 const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <>
    <div className='App'>
        <h1>Calling Edamam Recipe API with search query "Banana"</h1>
     {
        recipes.map((r,id) => (
          <Recipe key={id} title={r.recipe.title} image={r.recipe.image} calories={r.recipe.calories} />
        ))
      }
    </div>
    </>
  )
};

export default App;