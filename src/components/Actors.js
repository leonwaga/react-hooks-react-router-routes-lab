import React from "react";
import { actors } from "../data";

function Actors() {
  const act = actors.map((actor, index) => {
    return <div key={actor+index}>
    <h2>Name: {actor.name}</h2>
    <h5>Movies</h5>
  <ul>
    {actor.movies.map((list, index) =>{
      return<li key={list+index}>{list}</li>
    })}
  </ul>
  </div>
})

return(
      <div>
        <h1>Actors Page</h1>
        {Act}
      </div>
  )
}

export default Actors;
