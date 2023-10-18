import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList";
import { Detail } from "./components/Detail";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
