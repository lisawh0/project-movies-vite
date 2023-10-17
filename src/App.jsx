import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList";

export const App = () => {

  return (

    <BrowserRouter>
      <div className="main-wrapper">
        <Routes >
          <Route path="/" element={<MovieList />} />

        </Routes>
      </div>
    </BrowserRouter>

  );
};
