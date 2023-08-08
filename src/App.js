import React from 'react';

import './App.css';
import {TestUseMemo} from "./useMemo/TestUseMemo";
import {Toggle} from "./useToggle/Toggle";

const App = () => {
    return (
        <div>
            {/*<TestUseMemo/>*/}
            <hr/>
            <Toggle/>
        </div>
    );
};

export default App;
