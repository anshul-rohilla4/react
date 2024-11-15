import React, { useEffect, useState } from "react";

function BasicEffect() {
    const [num, setNum] = useState(1);

    useEffect(() => {
        console.log("useEffect num added");
    },[num]);
    return (
        <div>
            <h2>{num}</h2>
            <button onClick={()=>{setNum(num + num)}}>add num</button>
        </div>
    );
}

export default BasicEffect;
