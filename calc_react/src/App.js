import React from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

import StoreProvider from "./store/StoreProvider";

import "./App.css"

const App = () => {
    return (
        <StoreProvider >
            <h1>Calculator</h1>
            <Display />
            <Buttons />
        </StoreProvider>

    )
};

export default App;