import React from "react";
import { useMovieList } from "./useMovieList";
import useStore from "./useStore";
import MovieCard from "./MovieCard";

const MovieBox = () => {
  const { movies, error } = useMovieList();
  const { add } = useStore((state) => state);

  const handleClick = (item) => {
    const moviewithid = { ...item, id: Date.now() };
    console.log(moviewithid);
    add(moviewithid);
  };

  return (
    <div className="flex flex-wrap items-center justify-center">
      {error ? (
        <div>{error}</div>
      ) : movies.length === 0 ? (
        <div>Loading...</div>
      ) : (
        movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            onButtonClick={handleClick}
            buttonText="Add to watch later"
          />
        ))
      )}
    </div>
  );
};

export default MovieBox;
