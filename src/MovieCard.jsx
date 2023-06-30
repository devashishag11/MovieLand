import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}> 
      <div>
        <p>{Year} </p> {/*year of movie*/}
      </div> 

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} /> {/*poster of movie */}
      </div>

      <div>
        <span>{Type}</span> {/*type of movie */}
        <h3>{Title}</h3> {/*title of movie */}
      </div>
    </div>
  );
}

export default MovieCard;