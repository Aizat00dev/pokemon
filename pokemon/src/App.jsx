import Cards from "./Cards";
import dataPokemon from "./dataPokemon";
import './App.css';

function App() {
  const cards = dataPokemon.map(item =>{
    return(
      <Cards
        key ={item.id}
        name ={item.name}
        url ={item.url}
      />
    )
  })  
  return (
    <div className="App">
      <Cards/>
    </div>
  );
}

export default App;
