import React from 'react';

function Button(props) {
    return (
        <nav>
            <button onClick={props.getPokemon}>Get a pokemon</button>
        </nav>
    )
};

export default Button;