"use client";
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h2>Count: {counter}</h2>
            <div>
                <button onClick={()=>setCounter(counter + 1)} className="bg-green-500 rounded-md shadow-lg mr-2 px-3 py-2">Increase</button>
                <button onClick={()=>setCounter(counter - 1)} className="bg-red-500 rounded-md shadow-lg mr-2 px-3 py-2">Decrease</button>
            </div>
        </div>
    );
};

export default Counter;