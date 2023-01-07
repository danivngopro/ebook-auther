import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./components/pages/Book";
import HomePage from "./components/pages/Home";

function App() {
  return (
    <div style={{ backgroundColor: '#f7f7f8' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Book/:id" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
