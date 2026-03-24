/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import { storeContext } from '../context/Context'
import MenuList from '../menuList/MenuList'
import './foodDisplay.css'

function FoodDisplay({catagory}) {

    const {food_list} = useContext(storeContext)

    return (
    <div className="foodDisplay">
        <div className="foodDisplay_words container ">
            <h2>Top dishes In Our Menu</h2>
        </div>
        <div className="foodDisplayList container">
            {food_list.map((items , index)=> {
                // eslint-disable-next-line no-lone-blocks
                {console.log(catagory, items.catagory);}
                if(catagory === "All" || catagory === items.category ) {
                    return <MenuList key={index} id={items._id} name={items.name} description={items.description} price={items.price} image={items.image}/>
                }
            })}
        </div>
    </div>
    )
}

export default FoodDisplay
