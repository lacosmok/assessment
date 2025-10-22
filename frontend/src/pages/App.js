import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Items from "./items/Items";
import ItemDetail from "./items/ItemDetail";
import { DataProvider } from "../state/DataContext";
import SearchBar from "./SearchBar";

function App() {
  return (
    <DataProvider>

      <Routes>
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="/" element={<Items />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
