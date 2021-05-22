import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";


const Keybord = () => {

    const { numbers, value, setValue, setNumbers, operator, setOperator } = useContext(StoreContext);

    const handleClickNumber = (event) => {

        if (Number(event.target.innerText)) {
            setValue(value + event.target.innerText);
        };

    };

    const handleClickOperations = (event) => {
        setValue("")
        if (!operator) {
            setOperator(event.target.innerText)
        } else {
            console.log(operator);
        }
    }

    const handleClickScore = () => {
        setOperator("")
    }

    return (
        <div className="keybord">
            <button className="number" onClick={handleClickNumber}>7</button>
            <button className="number" onClick={handleClickNumber}>8</button>
            <button className="number" onClick={handleClickNumber}>9</button>
            <button className="number" onClick={handleClickNumber}>4</button>
            <button className="number" onClick={handleClickNumber}>5</button>
            <button className="number" onClick={handleClickNumber}>6</button>
            <button className="number" onClick={handleClickNumber}>1</button>
            <button className="number" onClick={handleClickNumber}>2</button>
            <button className="number" onClick={handleClickNumber}>3</button>
            <button className="number" onClick={handleClickNumber}>0</button>
            <button className="operations" onClick={handleClickOperations}>+</button>
            <button className="operations" onClick={handleClickScore}>=</button>

        </div>
    );
};

export default Keybord;