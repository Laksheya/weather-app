import React, {useState} from 'react'
import './style.css'
const UseState = () => {
    let [val, setVal] = useState(0);
    return (
        <>
            <div className="center_div">
                <p>{val}</p>
                <div className="button2" onClick={() => setVal(val+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className='button2' onClick={() => setVal((val>0)?(val-1):0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    )
}

export default UseState