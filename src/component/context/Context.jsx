
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const storeContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cardItems, setCardItems] = useState({})

    const addToCard = (itemsId) => {
        if(!cardItems[itemsId]){
            setCardItems((prev)=>({...prev,[itemsId]:1})) 
        }else{
            setCardItems((prev)=>({...prev,[itemsId]:prev[itemsId]+1})) 
        }
    }

    const removeFromCard = (itemsId) => {
        setCardItems((prev)=>({...prev,[itemsId]:prev[itemsId]-1})) 
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cardItems){
            if(cardItems[item] > 0 ) {
                let itemInfo = food_list.find((product) =>product._id === item);
                totalAmount += itemInfo.price * cardItems[item]
            }
        }
        return totalAmount
    }

    useEffect(()=> {
        console.log(cardItems)
    },[cardItems])

    const contextValue = {
        food_list,
        cardItems,
        setCardItems,
        addToCard,
        removeFromCard,
        getTotalCartAmount,
    }

    return (
            <storeContext.Provider value={contextValue}>
                {props.children}
            </storeContext.Provider>
    )
};

export default StoreContextProvider;


