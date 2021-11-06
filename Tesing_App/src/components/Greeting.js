import React, { useState } from 'react';
import Output from './Output';

function Greeting() {
    const[changedtext, setChangedtext] = useState(false);

    const changeTextHandler = () =>{
        setChangedtext(true);
    }

    return (
        <div>
            <h1>Hello World</h1>
            {!changedtext && <Output>It's good to see you!</Output>}
            {changedtext && <Output>Changed!</Output>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    );
}

export default Greeting;