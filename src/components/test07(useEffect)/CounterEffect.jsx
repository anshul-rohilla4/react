import { useEffect, useState } from "react";

const CounterEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("count updated");
        // document.title=`${count}`;
    });
    return (
        <div>
            {count}
            <button onClick={() => setCount(Math.floor(Math.random() * 100))}>
                Update
            </button>
        </div>
    );
};

export default CounterEffect;
