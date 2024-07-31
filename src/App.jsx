import React from "react";
import MovieBox from "./MovieBox";
import NavButton from "./NavButton";
import WatchLater from "./WatchLater";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <NavButton />
        <Routes>
          <Route path="/" element={<MovieBox />} />
          <Route path="/watchlist" element={<WatchLater />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
