import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";



const Display = () => {



    const { number, numbers } = useContext(StoreContext);

    return (
        <div>
            <h2>Wyświetlacz : {number}</h2>
            <h3>Historia : {numbers.join(" ")}</h3>
        </div>
    );
};

export default Display;