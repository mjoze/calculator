import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [flag, setFlag] = useState(true);
    const [actualNumber, setActualNumber] = useState(0);
    const [numbers, setNumbers] = useState([]);
    const [freezeNumber, setFreezeNumber] = useState("");
    const [operator, setOperator] = useState("")

    return (
        <StoreContext.Provider value={{
            actualNumber, setActualNumber, numbers, setNumbers, operator, setOperator, flag, setFlag, freezeNumber, setFreezeNumber
        }}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;