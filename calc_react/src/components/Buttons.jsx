import React, { useContext } from "react";
import { data } from "./data/data"
import "./Buttons.css";
import { StoreContext } from "../store/StoreProvider";


const Buttons = () => {
    const { number, setNumber } = useContext(StoreContext);
    const { numbers, setNumbers } = useContext(StoreContext);


    const button =
        data.map(btn => {
            const handleClick = (event) => {
                if (Number(event.target.innerHTML)) {
                    setNumber(number + event.target.innerText);

                } else if (!Number(event.target.innerHTML)) {
                    setNumbers([...numbers, Number(number)])
                    setNumber("");
                }
            };
            return <div className="btn" key={btn.id} value={btn.value} onClick={handleClick}>{btn.value} </div>
        });

    return (
        <main>
            {button}
        </main>
    );
};

export default Buttons;