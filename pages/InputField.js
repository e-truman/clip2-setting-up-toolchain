import React, { useState, useEffect } from 'react';

const InputElement = () => {
    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    });

    return isLoading ? <div>Loading...</div> : <div>
        <input onChange={(e) => {
            setInputText(e.target.value) // calling setter function, passing current input value to it
            setHistoryList([...historyList, e.target.value]) // spread existing list, append current value
        }}
            placeholder="Enter Some Text" />
        {inputText}
        <hr /><br />
        <ul>
            {historyList.map((rec) => { // javaScript expression, maps over historyList, outpust it on every keystroke
                return <div>{rec}</div>
            })}
        </ul>
    </div>
};

export default InputElement;

// hooks allow you to attach reusable logic to existing components
// every data store value is state
// everything new on the screen is a new state