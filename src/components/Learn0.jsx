import { useEffect, useState } from "react";
const Learn0 = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const [friends, setFriends] = useState(["alo", "bian", "niko"]);

    const [count2, setCount2] = useState(() => {
        const initialCount2 = 10;
        return initialCount2;
    });

    const incrementCount2 = () => {
        setCount2((prevCount2) => prevCount2 + 1);
    };

    const [randNum, setRandNum] = useState(() =>
        Math.floor(Math.random() * 100)
    );
    const generateNewRandNum = () => {
        const newNum = Math.floor(Math.random() * 100);
        setRandNum(newNum);
    };

    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("call useEffect");
        // document.title=`Increment ${value}`;
    }, [value]);

    return (
        <div>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
            <p></p>
            {friends.map((f) => (
                <li key={f}>{f}</li>
            ))}
            <h1>Count:{count2}</h1>
            <button onClick={incrementCount2}>Increment</button>
            <h1>{randNum}</h1>
            <button onClick={generateNewRandNum}>New Number</button>
            <h3>{value}</h3>
            <button onClick={() => setValue(value + 1)}>increase</button>
            check console && page title
        </div>
    );
};

export default Learn0;
