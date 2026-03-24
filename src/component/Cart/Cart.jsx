/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import { storeContext } from '../context/Context'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'


function Cart() {

    const {cardItems, food_list, removeFromCard, getTotalCartAmount} = useContext(storeContext)
    const navigate = useNavigate();

    return (
        <div className='Cart container'>
            <div className="card_items">
                {(cardItems && Object.keys(cardItems).length > 0 ) ? (
                    <div className="card_items_title">
                        <p>Items</p>
                        <p>Title</p>
                        <p>$Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>)
                    :(<div className="empty">
                        <h1>Go And Order Some Food</h1>
                        <p>Go To Our Menu And Choose Some Food To Order Them</p>
                    </div>)
                    }
                <br />
                <hr />
                </div>
                    {food_list.map((item, index)=>{
                        if(cardItems[item._id]>0){
                            return(
                                <div>
                                    <div key={index} className="card_items_title card_items_item">
                                        <img className='card_items_item_img' src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cardItems[item._id]}</p>
                                        <p>${item.price * cardItems[item._id]}  </p>
                                        <p onClick={()=>removeFromCard(item._id)} className='card_items_item_remove'>X</p>
                                    </div>
                                    <hr />
                                </div>
                            )
                        }
                    })}

                    {(cardItems && Object.keys(cardItems).length > 0 ) ? 
                    <div className="card_bottom">
                        <div className="card_bottom_total">
                            <div>
                                <h2>Card Total</h2>
                                <div className="card_bottom_total_details">
                                    <p>Sub Total</p> 
                                    <p>${getTotalCartAmount()}</p>
                                </div>
                                <hr />
                                <div className="card_bottom_total_details">
                                    <p>Delivery Fee</p> 
                                    <p>${getTotalCartAmount()===0?0:2}</p>
                                </div>
                                <hr />
                                <div className="card_bottom_total_details">
                                    <p>Total</p> 
                                    <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
                                </div>
                                <hr />
                                <button onClick={()=>navigate("/order")}>Process To CheckOut</button>
                            </div>
                        </div>
                        <div className="promo_code">
                            <div>
                                <p>If You Have Promo code, Enter It Here</p>
                                <div className="Promo_code_input">
                                    <input type="text" placeholder='Promo Code'/>
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :""
                }
            </div>
    )
}

export default Cart
