import { useEffect, useRef } from "react";
import { useData } from "../../state/DataContext";
import Breadcrumbs from "../Breadcrumbs";
import ItemList from "./ItemList";
import SearchBar from "../SearchBar";

function Items() {
  const { items, fetchItems, page, search } = useData();

  const active = useRef(true);
  useEffect(() => {
    fetchItems(active).catch(console.error);
    return () => {
      active.current = false;
    };
  }, [fetchItems, page, search]);

  return (
    <>
      <nav className="flex space-between border-b border-gray-300 mb-4 justify-between items-center">
        <Breadcrumbs crumbs={[{ label: "Items" }]}></Breadcrumbs>
        <SearchBar />
      </nav>

      {items.length > 0 && <ItemList items={items} />}
    </>
  );
}

export default Items;
