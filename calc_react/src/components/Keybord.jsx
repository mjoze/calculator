import React from "react";

const Keybord = () => {
    return (
        <div className="keybord">
            <button content={7} className="number" onClick={(event) => { console.log(event); }}>7</button>
            <button>8</button>
            <button>9</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>0</button>

        </div>
    );
};

export default Keybord;