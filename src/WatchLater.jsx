import React from "react";
import useStore from "./useStore";
import MovieCard from "./MovieCard";

const WatchLater = () => {
  const { watchLater, remove } = useStore((state) => state);

  const handleRemoveClick = (movie) => {
    remove(movie);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-white font-bold mb-4 underline">
        Watch Later List
      </h1>
      <div className=" p-4 flex text-white flex-wrap items-center justify-center ">
        {watchLater.length === 0 ? (
          <div>No movies...</div>
        ) : (
          watchLater.map((movie) => (
            <div key={movie.id}>
              <MovieCard
                movie={movie}
                onButtonClick={() => handleRemoveClick(movie)}
                buttonText="Remove from Watch Later"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WatchLater;
