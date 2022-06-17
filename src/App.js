import '../src/App.css'
import '../src/index.css'

import Balance from "./components/Balance";
import Operation from "./components/Operation";
import {useState} from "react";

function App() {
    return (
        <div className={'App'}>
            <Balance/>
            <Operation/>
        </div>
    )
}

export default App;
