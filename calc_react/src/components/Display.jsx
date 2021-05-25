import React, { useContext, useEffect } from "react";
import { StoreContext } from "../store/StoreProvider";


const Display = () => {
    const { actualNumber, setActualNumber } = useContext(StoreContext);

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