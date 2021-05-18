import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {

    return (
        <StoreContext.Provider value={{}}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;