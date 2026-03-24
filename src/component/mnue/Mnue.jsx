import React from 'react'
import {menu_list} from '../assets/assets'
import "./Mnue.css"

function Mnue({catagory , setCatagory}) {
    return (
        <div className='container menu' id='menu'>
            <h1>Explore Our Menu</h1>
            <p>Choose Your Food & Drinks From Our Menu</p>
            <div className="menuCatagory">
                {menu_list.map((items, index) => {
                    return(
                        <div onClick={() => setCatagory(prev => prev===items.menu_name ? "All":items.menu_name)} key={index} className="Menu_list_holder">
                            <img className={catagory===items.menu_name ? "active":'' } src={items.menu_image} alt="Menu_Image" />
                            <p>{items.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default Mnue
