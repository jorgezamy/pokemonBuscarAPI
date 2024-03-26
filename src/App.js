import './App.css';
import React, { useEffect, useState } from 'react';
import Pokemon from './pokemonLists.js';

function App() {

  const [offSet, setOffSet] = useState("");
  const [limit, setLimit] = useState("");
  const [pokemons, setPokemons] = useState([]);

  const searchPokemon = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit="+limit+"&offset="+offSet+"";

    const respuesta = await fetch(url, {
      "method": 'GET',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      }
    });

    const jsonFile = await respuesta.json();

    setPokemons(jsonFile.results);
  }

  const onChangeLimit = event => {
    setLimit(event.target.value);
  }
  
  const onChangeOffset = event => {
    setOffSet(event.target.value);
  }

  // useEffect(() => {
  //   searchPokemon();
  // }, []);

  return (
    <div className="App">

      Limit: <input type="Text" value={limit} onChange={onChangeLimit}></input>
      <br/>
      OffSet: <input type="Text" value={offSet} onChange={onChangeOffset}></input>
      <br/>
      <button className='btn btn-primary' onClick={searchPokemon}>Load Pokemons</button>

      <ul>
        {!pokemons ? 'Loading...' :
          pokemons.map((pokemons, index) => {
            return (
              <Pokemon key={pokemons.name} nombre={pokemons.name}></Pokemon>
            )
          })
        }
      </ul>

    </div>
  );
}

export default App;