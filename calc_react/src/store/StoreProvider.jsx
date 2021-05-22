import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [value, setValue] = useState("");
    const [numbers, setNumbers] = useState("");
    const [operator, setOperator] = useState("")

    return (
        <StoreContext.Provider value={{ value, setValue, numbers, setNumbers, operator, setOperator }}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;