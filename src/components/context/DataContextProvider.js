import React, { useState, useContext, useCallback } from "react";

const DataContext = React.createContext();

export const useDataContext = () => {
    return useContext(DataContext);
};

const DataContextProvider = ({ children }) => {
    const [query, setQuery] = useState({ name: "", region: "all" });

    const searchHandler = useCallback(
        (type, value) => {
            setQuery({ ...query, [type]: value });
        },
        [query]
    );

    return (
        <DataContext.Provider
            value={{
                searchHandler,
                query,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
