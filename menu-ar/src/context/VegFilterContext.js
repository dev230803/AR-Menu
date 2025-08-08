import React, { createContext, useContext, useState } from "react";

const VegFilterContext = createContext();

export const useVegFilter = () => {
  const context = useContext(VegFilterContext);
  if (!context) {
    throw new Error("useVegFilter must be used within a VegFilterProvider");
  }
  return context;
};

export const VegFilterProvider = ({ children }) => {
  const [vegFilter, setVegFilter] = useState(null); // null = all, true = veg only, false = non-veg only

  const setVegOnly = () => setVegFilter(true);
  const setNonVegOnly = () => setVegFilter(false);
  const clearFilter = () => setVegFilter(null);

  const value = {
    vegFilter,
    setVegOnly,
    setNonVegOnly,
    clearFilter,
  };

  return (
    <VegFilterContext.Provider value={value}>
      {children}
    </VegFilterContext.Provider>
  );
};
