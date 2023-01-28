import React from 'react'
import './style.css'
import Menu from './menuapi'
import Card from './card'
import Nav from './nav'

const Category = Array.from(new Set(Menu.map(el => {
    return el.category;
})))
// console.log(Category);


const Restaurant = () => {
    const [menuData, setMenuData] = React.useState(Menu);
    const [cat, setCat] = React.useState(Category);
    const filterList = (cat) => {
        let updatedList = Menu.filter(el => {
            return el.category === cat;
        })
        setMenuData(updatedList);
    }

    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button>
                    <Nav category={cat} filterList={filterList} />              
                </div>
            </nav>
            {/* {console.log(cat)}
            {console.log("hello")} */}
            <Card menuData={menuData} />
        </>
    )
}

export default Restaurant