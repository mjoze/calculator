import React, { useContext, useEffect } from "react";
import { data } from "./data/data";
import "./Buttons.css";
import { StoreContext } from "../store/StoreProvider";


const Buttons = () => {
    const { number, setNumber, value, setValue } = useContext(StoreContext);

    const button =
        data.map(btn => {

            const handleClick = (event) => {
                if (Number(event.target.innerText)) {
                    setValue(value + event.target.innerText)
                }
                else if (!Number(event.target.innerText)) {
                    setNumber([...number, Number(value)])
                    setValue("");
                }
                ;

            };

            return <div className="btn" key={btn.id} value={btn.value} onClick={handleClick} >{btn.value} </div>
        });

    return (
        <div>
            <h2>Wyświetlacz:{value}</h2>
            <p>Wynik:</p>
            <main>
                {button}
            </main>
        </div>
    );
};

export default Buttons;