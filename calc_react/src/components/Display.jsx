import React, { useContext, useEffect } from "react";
import { StoreContext } from "../store/StoreProvider";


const Display = () => {
    const { number } = useContext(StoreContext);
    const { actualNumber } = number
    useEffect(() => {
        console.log('object');
    }, [])
    return (
        <div>
            <h1>Wyświetlacz: {actualNumber}</h1>
        </div>
    );
};

export default Display;