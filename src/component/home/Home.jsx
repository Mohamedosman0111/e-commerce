import React, { useState } from 'react'
import Header from '../header/Header'
import Mnue from "../mnue/Mnue"
import FoodDisplay from '../foodDisplay/FoodDisplay'
import DownloadApp from '../downloadApp/DownloadApp'

function Home() {

    const [catagory,setCatagory] = useState("All")

    return (
    <div>
        <Header />
        <Mnue catagory={catagory} setCatagory={setCatagory} />
        <FoodDisplay catagory={catagory} setCatagory={setCatagory} />
        <DownloadApp />
    </div>
    )
}

export default Home
