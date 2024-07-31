import React from "react";
import { Link } from "react-router-dom";
import useStore from "./useStore";

const NavButton = () => {
  const { watchLater } = useStore((state) => state);

  return (
    <div className="flex items-end justify-end">
      <Link to="/">
        <button className=" mt-2 mr-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-2 rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-700 transition duration-300">
          <i className="fa-solid fa-house"></i> Home
        </button>
      </Link>
      <Link to="/watchlist">
        <button className="relative mt-2 mr-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-2 rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-700 transition duration-300">
          <i className="fa-solid fa-clock"></i> Watchlist
          {watchLater.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs px-2 py-1 rounded-full">
              {watchLater.length}
            </span>
          )}
        </button>
      </Link>
    </div>
  );
};

export default NavButton;
