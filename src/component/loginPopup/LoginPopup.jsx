import React, { useState } from 'react'
import { assets } from '../assets/assets'
import "./LoginPopup.css"

function LoginPopup({setShowLogin}) {

    const [currentState,SetCurrentState] = useState('Sign Up')

    return (
        <div className='LoginForm'>
            <form className='LoginForm_content'>
                <div className="LoginForm_content_header">
                    <h2>{currentState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="LoginForm_content_inputs">
                    {currentState==="Login"
                    ?<></>
                    :<input type="text" placeholder='Your Name' required/>
                    }
                    <input type="email" placeholder='Your Email' required/>
                    <input type="Password" placeholder='Password' required/>
                </div>
                <button type='submit'>{currentState==="Sign Up"?"Create an Account":"Login"}</button>
                <div className="LoginForm_content_Check">
                    <input type="checkbox" />
                    <p>Check the Box to Know that You Are Agree All Our Licence</p>
                </div>
                <div className="LoginForm_content_Permission">
                    {currentState==="Login"
                    ?<p>Create a new Account ? <span onClick={()=>SetCurrentState("Sign Up")}> Click Here </span></p>
                    :<p>Already Have an Account ? <span onClick={()=>SetCurrentState("Login")}> Login Here </span></p>
                    }
                </div>
            </form>
        </div>
    )
}

export default LoginPopup;
