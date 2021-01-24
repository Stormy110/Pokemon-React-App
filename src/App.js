import Pokemon from "./Pokemon";
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from 'react';
import Button from "./Button";

function App() {

  const [pokemon, setPokemon] = useState("")
  const [pokeImg, setpokeImg] = useState("")
  const [backImg, setbackImg] = useState("")
  


  async function getPokemon(){
    const id = Math.floor(Math.random() * 100)
    const pokePromise = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const response = await pokePromise;
    const pokeData = await response.json();
    ;
    console.log(pokeData);
    const pokeName = pokeData.name;
    console.log(pokeName)
    const pokeImg = pokeData.sprites.front_default;
    console.log(pokeImg)
    const backImg = pokeData.sprites.back_default;
    
    // let names = results.map(p => {
    //   return <li><button>{p.name} : {p.url}</button></li>
    // })
    setPokemon(pokeName);
    setpokeImg(pokeImg);
    setbackImg(backImg);
   

    //setPokemon(pokeData.results[0])
  }


  
  useEffect(()=>{
     getPokemon()
   }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <Pokemon pokemon={pokemon} pokeImg={pokeImg} backImg={backImg}/>
        <Button getPokemon={getPokemon}/>
      </header>
    </div>
  );
}

export default App;
