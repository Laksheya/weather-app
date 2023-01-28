import React, { useState, useEffect } from 'react'
import './style.css'


const getLocalData = () => {
    let list = localStorage.getItem("todolist");

    if (list) {
        return JSON.parse(list);
    } else {
        return []
    }
}


const ToDo = () => {
    const [inputData, setData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
    const addItem = () => {
        if (!inputData) {
            alert("Abe Kuch Daal Toh Pehle")
        } else if(inputData && toggleButton) {
            items.forEach((el => {
                if(el.id === isEditItem) {
                    el.name = inputData;
                }
            }))
            setToggleButton(false);
            setIsEditItem("");
            setData("");
        } else {
            const data = {
                id: new Date().getTime().toString(),
                name: inputData
            };
            setItems([...items, data]);
            setData("");
        }
    }

    const deleteItem = (id) => {
        let newitems = items.filter((el) => {
            return el.id !== id
        })
        setItems(newitems);
    }


    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(items))
    }, [items])

    const editItem = (id) => {
        let itemtoedit = items.find(el => el.id === id)
        setData(itemtoedit.name);
        setIsEditItem(id);
        setToggleButton(true);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="images/todo.svg" alt="Todo Logo" />
                        <figcaption>Add Your List Here 👌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='✍️ Add Item' className='form-control' value={inputData} onChange={(event) => setData(event.target.value)} />
                        {
                            toggleButton ? (
                                <i className="far fa-edit add-btn" onClick={addItem}></i>
                            ) : (
                                <i className="fa fa-plus add-btn" onClick={addItem}></i>
                            )
                        }
                    </div>

                    <div className="showItems">
                        {items.map((el) => {
                            return (
                                <div className="eachItem" key={el.id}>
                                    <h3>{el.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit add-btn" onClick={() => editItem(el.id)}></i>
                                        <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(el.id)}></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={() => setItems([])}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo