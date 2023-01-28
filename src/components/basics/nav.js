import React from 'react'
import './style.css'
import Menu from './menuapi'



const Nav = ({category, filterList}) => {
    return (
        <>
            {/* {console.log(category)} */}
            {category.map(el => {
                return (
                    <button className="btn-group__item" onClick={() => filterList(el)}>{el}</button>
                )
            })}
        </>
    )
}

export default Nav