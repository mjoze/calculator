import React, { useContext, useEffect } from "react";
import { StoreContext } from "../store/StoreProvider";


const Display = () => {
    const { value, number } = useContext(StoreContext);

    useEffect(() => {
        console.log('object');
    }, [])
    return (
        <div>
            <h1>Wyświetlacz: {value}</h1>
        </div>
    );
};

export default Display;