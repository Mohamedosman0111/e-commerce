import React, { useContext } from 'react'
import "./MenuList.css"
import { assets } from '../assets/assets'
import { storeContext } from '../context/Context'

function MenuList({id, name, price, description, image}) {

    const {cardItems,addToCard,removeFromCard} = useContext(storeContext)

    return (
        <div className='MenuList'>
            <div className='MenuList_holder'>
                <img className="MenuListImage" src={image} alt="Menu_Image" />
                <div className="counter">
                    {!cardItems[id] ? 
                    <img onClick={()=>addToCard(id)} className='add_icon' src={assets.add_icon_white} alt="Menu_Image" />
                    : 
                    <div className="add_remover">
                        <img onClick={()=>addToCard(id)} className='add_icon_green' src={assets.add_icon_green} alt="Menu_Image" />
                        <p>{cardItems[id]}</p>
                        <img onClick={()=>removeFromCard(id)} className='add_icon_green' src={assets.remove_icon_red} alt="Menu_Image" />
                    </div>
                }
                </div>
            </div>
            <div className="MenuListWords">
                <div className="MenuListWords_Name">
                    <h3>{name}</h3>
                    <img src={assets.rating_starts} alt="rating_starts" />
                </div>
                    <p className='MenuListWords_description'>{description}</p>
                    <p className='MenuListWords_price'>${price}</p>
            </div>
        </div>
    )
}

export default MenuList
