import './cobClock.css';
import React, { useEffect, useState } from 'react';

const CobClock = () => { // Rename the component to start with an uppercase letter

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    var timer;

    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1); // Use functional updates to avoid stale state
            if (seconds === 59) {
                setMinutes(prevMinutes => prevMinutes + 1); // Use functional updates to avoid stale state
                setSeconds(0);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]); // Add seconds as a dependency to useEffect

    const restart = () => {
        setSeconds(0);
        setMinutes(0);
    }
    const stop = () => {
        clearInterval(timer);
    }

    return (
        <div className="clock">
            <div className='container'>
                <div className='clockContainer'>
                    <h1>Timer</h1>
                    <h1>{minutes<10? "0"+minutes:minutes}:{seconds<10? "0"+seconds:seconds}</h1>
                    <button className="restart" onClick={restart}>Restart</button>
                    <button className="stop" onClick={stop}>Stop</button>
                </div>
            </div>
        </div>
    );
};

export default CobClock;
