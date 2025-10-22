import React, { createContext, useCallback, useContext, useState } from "react";

const DataContext = createContext();

/*
I decided to include all data-related state and functions in this single context for simplicity. In a larger application, it might be better to separate concerns into multiple contexts or use a state management library.
*/
export function DataProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  // Fixed limit to 50 as per requirements For the scope of this assessment.
  const [limit, setLimit] = useState(50);

  const fetchItems = useCallback(
    async (active) => {
      const link = `http://localhost:4001/api/items?limit=${limit}&page=${page}${
        search ? `&q=${encodeURIComponent(search)}` : ""
      }`;
      const res = await fetch(link);
      const json = await res.json();
      if (!active) return;
      setItems(json.items);
      setTotalPages(json.totalPages);
    },
    [page, search]
  );

  return (
    <DataContext.Provider
      value={{
        items,
        fetchItems,
        page,
        setPage,
        totalPages,
        search,
        setSearch,
        loading,
        setLoading,
        limit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
