import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [number, setNumber] = useState("");
    const [numbers, setNumbers] = useState([])

    return (
        <StoreContext.Provider value={{ number, setNumber, numbers, setNumbers }}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;