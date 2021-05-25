import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";


const Keybord = () => {
    const { actualNumber, setActualNumber, numbers, setNumbers, operator, setOperator, flag, setFlag, freezeNumber, setFreezeNumber } = useContext(StoreContext);

    const handleClickNumber = (event) => {
        if (!flag) {
            setActualNumber("" + event.target.innerText);
            setFlag(true);
        } else if (flag) {
            setActualNumber(actualNumber + event.target.innerText);
        }
    };

    const handleClickOperations = (event) => {
        setFlag(false);
        if (operator) {
            const score = (Number(actualNumber) + Number(numbers[numbers.length - 1]));
            setActualNumber(score);
            setNumbers([...numbers, actualNumber, score]);
        } else {
            setOperator(event.target.innerText);
            setNumbers([...numbers, actualNumber]);
            setActualNumber("");
            setFlag(true);
        }
    };

    const handleClickScore = () => {
        if (operator === "") {
            const score = Number(actualNumber) + Number(freezeNumber)
            setActualNumber(score);
            setNumbers([...numbers, score]);
        } else {
            const score = Number(actualNumber) + Number(numbers[numbers.length - 1]);
            setActualNumber(score);
            setNumbers([...numbers, actualNumber, score]);
            setFlag(false);
            setOperator("");
            setFreezeNumber(actualNumber);
        }
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