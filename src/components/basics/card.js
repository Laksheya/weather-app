import React from 'react'
import './style.css'
// import Menu from './menuapi'

const Card = ({ menuData }) => {
    
    return (
        <>
            <section className="main-card--cointainer">
                {menuData.map(el => {
                    return (
                        <div className='card-container'>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-numbet card-circle subtle">{el.id}</span>
                                    <span className="card-author subtle">{el.category}</span>
                                    <h2 className="card-title">{el.name}</h2>
                                    <span className="card-description subtle">{el.description}</span>
                                    <div className="card-read">Read</div>
                                </div>
                                <img src={el.link} alt="images" className="card-media" />
                                <span className="card-tag subtle">Order Now</span>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default Card