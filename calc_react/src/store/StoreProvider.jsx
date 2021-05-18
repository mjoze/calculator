import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [number, setNumber] = useState([]);
    const [value, setValue] = useState("");
    return (
        <StoreContext.Provider value={{ number, setNumber, value, setValue }}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;