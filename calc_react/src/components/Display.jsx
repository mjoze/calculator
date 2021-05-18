import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";


const Display = () => {

    const { } = useContext(StoreContext);

    return (
        <div>
            <h2>Wyświetlacz:</h2>
            <p>Wynik:</p>
        </div>
    );
};

export default Display;