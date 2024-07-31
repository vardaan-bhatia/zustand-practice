import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const useMovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
        );
        const data = response.data;
        setMovies(data.slice(0, 4));
      } catch (error) {
        setError(`The error is: ${error}`);
      }
    };
    fetchData();
  }, []);

  return { movies, error };
};
