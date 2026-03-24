import React, { useContext } from 'react'
import { storeContext } from '../context/Context'
import "./placeOrder.css"

function PlaceOrder() {

    const {getTotalCartAmount} = useContext(storeContext)

    return (
        <form className='placeOrder container'>
            <div className="PlaceOrder_left">
                <h2>Delivery Information</h2>
                <div className="multi_fields">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="email" placeholder='Email Address' />
                <input type="text" placeholder='street' />
                <div className="multi_fields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className="multi_fields">
                    <input type="text" placeholder='Zip Code' />
                    <input type="text" placeholder='Country' />
                </div>
                <input type="text" placeholder='phone' />
            </div>
        
            <div className="PlaceOrder_right">
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
                            <p>${2}</p>
                        </div>
                        <hr />
                        <div className="card_bottom_total_details">
                            <p>Total</p> 
                            <p>${getTotalCartAmount() +2}</p>
                        </div>
                        <hr />
                        <button>Process To Payment</button>
                    </div>
                </div>
            </div>
        </form>
        
    )
}

export default PlaceOrder
