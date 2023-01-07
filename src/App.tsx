import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./components/pages/Book";
import HomePage from "./components/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Book/:id" element={<Book />} />
    </Routes>
  );
}

export default App;
