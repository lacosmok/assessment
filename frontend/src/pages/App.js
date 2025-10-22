import { Routes, Route } from "react-router-dom";
import Items from "./items/Items";
import ItemDetail from "./items/ItemDetail";
import { DataProvider } from "../state/DataContext";

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
