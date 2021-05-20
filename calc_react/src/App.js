import React from "react";
import Keybord from "./components/Keybord";
import Display from "./components/Display";

import StoreProvider from "./store/StoreProvider";

import "./App.css"

const App = () => {
    return (
        <StoreProvider >
            <h1>Calculator</h1>
            <Display />
            <Keybord />

        </StoreProvider>

    )
};

export default App;