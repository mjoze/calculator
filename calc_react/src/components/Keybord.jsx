import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";


const Keybord = () => {
    const { number, setNumber } = useContext(StoreContext);

    const { actualNumber, flag, freezeNumber, numbers, operator } = number;

    const handleClickNumber = (event) => {
        if (!flag) {
            setNumber({
                actualNumber: "" + event.target.innerText,
                flag: true,
                freezeNumber: 0,
                numbers: numbers,
                operator: operator,
            });

        } else if (flag) {
            setNumber({
                actualNumber: actualNumber + event.target.innerText,
                flag: true,
                freezeNumber: 0,
                numbers: numbers,
                operator: operator,
            });
        };
    };

    const handleClickOperations = (event) => {
        setNumber({ flag: false });
        if (operator) {
            const score = (Number(actualNumber) + Number(numbers[numbers.length - 1]));
            setNumber({
                actualNumber: score,
                flag: true,
                freezeNumber: 0,
                numbers: [...numbers, actualNumber, score],
                operator: ""
            });
        } else {
            setNumber({
                actualNumber: "",
                flag: true,
                freezeNumber: 0,
                numbers: [...numbers, actualNumber],
                operator: event.target.innerText,
            });
        };
    };

    const handleClickScore = () => {
        if (operator === "") {
            const score = Number(actualNumber) + Number(freezeNumber);
            setNumber({
                actualNumber: score,
                flag: true,
                freezeNumber: freezeNumber,
                numbers: [...numbers, score],
                operator: "",

            });
        } else {
            const score = Number(actualNumber) + Number(numbers[numbers.length - 1]);
            setNumber({
                actualNumber: score,
                flag: false,
                freezeNumber: actualNumber,
                numbers: [...numbers, actualNumber, score],
                operator: "",
            });
        };
    };

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