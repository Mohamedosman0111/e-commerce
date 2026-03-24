import React from 'react'
import "./footer.css"
import {assets} from "../assets/assets"

function Footer() {
    return (
        <div className='footer' id='Footer'>
            <div className="footer_container container">
                <div className="footer_start">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut accusamus consequatur officia tenetur eligendi quasi saepe culpa accusantium</p>
                    <div className="footer_socail">
                        <img src={assets.facebook_icon} alt="facebook_icon" />
                        <img src={assets.twitter_icon} alt="twitter_icon" />
                        <img src={assets.linkedin_icon} alt="linkedin_icon" />
                    </div>
                </div>

                <div className="footer_center">
                    <h2>Company</h2>
                    <ul>
                        <li>Menu</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer_end">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>012-7422-8285</li>
                        <li>Osman@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="copyRight container">
            <hr />
            <p className="copyRight">Copy Right 2024 -All Right Recived</p>
            </div>
        </div>
    )
    }

export default Footer
