import {useMemo, useState} from "react";

const Calculate = (data) => {
    for (let i = 0; i < 1000000000; i++) {
        data += 1;
    }

    return data;
};

const TestUseMemo = () => {
    const [infos, setInfos] = useState([]);
    const [count, setCount] = useState(0);

    const calculate = useMemo(() => Calculate(count), [count]);

    const counter = (type) => {
        setCount(type === 'increment' ? count+1 : count-1)
    };

    const addInfo = () => {
        setInfos((i) => [...i, "My new info"])
    };

    return (
        <div>
            <div>
                Counter: {count}
                <br/>
                <button onClick={() => counter('increment')}>Plus</button>
                <button onClick={() => counter('decrement')}>Minus</button>
                <p>Calculate</p>
                {calculate}
            </div>
            <hr/>
            <div>
                <h2>My info</h2>
                {infos.map((info, index) => {
                    return <div key={index}>{info}</div>
                })}
                <button onClick={addInfo}>Add info</button>
            </div>
        </div>
    );
};

export {TestUseMemo};