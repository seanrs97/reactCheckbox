import React from 'react';

function Joke(prop){
    return (
        <div className = "joke-style">
            <h1 style = {{display: prop.joke.question ? "block" : "none"}}> {prop.joke.question} </h1>
            <h2 stye = {{color: !prop.joke.question && "#888888"}}> {prop.joke.punchLine}</h2>
        </div>
    );
}

export default Joke