import React from "react";

const MovieCard = ({ movie, onButtonClick, buttonText }) => {
  return (
    <div className="m-6 w-72">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="flex flex-col items-center justify-center gap-3 mt-2">
        <h3 className="text-white font-bold text-xl">{movie.Title}</h3>
        <p className="text-gray-300 font-bold text-lg">{movie.Year}</p>
        <p className="text-gray-300 font-bold">{movie.Runtime}</p>
        <button
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-700 transition duration-300"
          onClick={() => onButtonClick(movie)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
