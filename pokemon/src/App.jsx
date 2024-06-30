import React from "react";
import Cards from "./Cards";
import dataPokemon from "./dataPokemon";
import './App.css';

function App() {
  const cards = dataPokemon.map(item =>{
    return(
      <Cards
        key ={item.id}
       {...item}
      />
    )
  })  
  return (
    <div className="App">
      {cards}
    </div>
  );
}

export default App;
