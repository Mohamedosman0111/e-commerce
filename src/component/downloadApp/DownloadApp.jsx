import React from 'react'
import "./download.css"
import { assets } from '../assets/assets'

function DownloadApp() {
    return (
        <div className='DownloadApp container' id='DownloadApp'>
            <div className="DownloadApp_words">
                <h3>Download Our App From Google Play</h3>
            </div>
            <div className="DownloadApp_photos">
                <img src={assets.play_store} alt="play_store" />
                <img src={assets.app_store} alt="play_store" />
            </div>
        </div>
    )
}

export default DownloadApp
