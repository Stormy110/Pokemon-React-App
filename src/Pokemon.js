import React from "react";

function Pokemon(props) {



  return (
      <div>
        <h3>{props.pokemon}</h3>
          <div className="pokeimages">
            <img src={props.backImg} alt={props.pokemon}/>
            <img src={props.pokeImg} alt={props.pokemon}/>
          </div>
      </div>
  )
}

export default Pokemon;
