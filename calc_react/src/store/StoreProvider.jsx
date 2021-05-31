import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [number, setNumber] = useState({
        flag: true,
        actualNumber: 0,
        numbers: [],
        freezeNumber: 0,
        operator: ""
    });

    return (
        <StoreContext.Provider value={{
            number, setNumber
        }}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;