import "./Nav.css"
import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { storeContext } from "../context/Context";

function Nav({setShowLogin}) {
  const [state,setState] = useState("/")
  const { getTotalCartAmount } = useContext(storeContext)
  function slider() {
    let navbar = document.querySelector('#navbarUl')
    let navbar_right = document.querySelector('.navbar-right')
    navbar.classList.toggle("open")
    navbar_right.classList.toggle("open")
  }

  return (
    <div className="foodNavbar container">
      <Link to="/"><img src={assets.logo} alt="Logo" className="logo"/></Link>
      <ul className="navbar-menu" id="navbarUl">
        <Link to='/' onClick={() => {
          setState("home") 
          slider()
        }} className={state==="home"?"navbar-menu-active":''}>Home</Link>
        <a href="#menu" onClick={() => {
          setState("menu")
          slider()
        }} className={state==="menu"?"navbar-menu-active":''}>menu</a>
        <a href="#DownloadApp" onClick={() => {
          setState("mobile")
          slider()
        }} className={state==="mobile"?"navbar-menu-active":''}>mobile-app</a>
        <a href="#Footer" onClick={() => {
          setState("contact")
          slider()
        }} className={state==="contact"?"navbar-menu-active":''}>contact us</a>
      </ul>
      <div className="bars" onClick={() => {slider()}}>
          <i class="fa-solid fa-bars"></i>
      </div>
      <div className="navbar-right">
        <img onClick={() => { slider() }} c src={assets.search_icon} alt="" />
        <div onClick={() => { slider() }} className="navbar-search-icon">
          <Link to="/Cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ?"":"dot"}></div>
        </div>
        <button onClick={() => {
          setShowLogin(true)
          slider() 
        }}>sign in</button>
      </div>
    </div>
);
}

export default Nav;
