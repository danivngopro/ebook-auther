import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./pages/Book/Book";
import HomePage from "./pages/Home/Home";

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
