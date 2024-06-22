import React, { useState } from 'react';
import Card from "./Card";

const MovieList = ({movies,search}) => {
    
  return (
    
    <div className="list">
      {movies.filter((el) => el.name.toLowerCase().includes(search.toLowerCase())).map((el) => (<Card el={el} />))}
    </div>
  );
};

export default MovieList
