import { Route , Routes} from "react-router-dom";
import "./App.css";
import Home from "./component/home/Home";
import Nav from "./component/NavBar/Nav";
import Footer from "../src/component/footer/Footer"
import Cart from "./component/Cart/Cart";
import LoginPopup from "./component/loginPopup/LoginPopup";
import { useState } from "react";
import PlaceOrder from "./component/PlaceOrder/PlaceOrder";
function App() {

  const [showLogin,setShowLogin] = useState(false)

  return(
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="App">
        <Nav setShowLogin={setShowLogin}/>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/order" element={<PlaceOrder />}/>
        </Routes>
      </div>
      <Footer />
    </>
  ) 
}

export default App;
