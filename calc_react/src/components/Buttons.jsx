import React, { useContext, useEffect } from "react";
import { data } from "./data/data";
import "./Buttons.css";
import { StoreContext } from "../store/StoreProvider";


const Buttons = () => {
    const { } = useContext(StoreContext);

    const button =
        data.map(btn => {

            const handleClick = (event) => {

            };

            return <div className="btn" key={btn.id} value={btn.value} onClick={handleClick} >{btn.value} </div>
        });

    return (
        <main>
            {button}
        </main>
    );
};

export default Buttons;