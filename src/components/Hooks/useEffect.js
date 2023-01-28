import React, { useState, useEffect } from 'react'
import './style.css'
const UseEffect = () => {
    let [val, setVal] = useState(0);
    
    useEffect(() => {
        document.title = `Chats(${val})`
    })
    
    return (
        <>
            <div className="center_div">
                <p>{val}</p>
                <div className="button2" onClick={() => setVal(val+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    HOVER ME
                </div>
            </div>
        </>
    )
}

export default UseEffect