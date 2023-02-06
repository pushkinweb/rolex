import React, {useState} from 'react';
import s from "./Counter.module.scss"

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        console.log()
        setCount(prev => ++prev)
    }

    return (
        <div className={s.main}>
            <h1>{count}</h1>
            <button onClick={() => handleClick()}>Нажать</button>
        </div>
    );
};

export default Counter;