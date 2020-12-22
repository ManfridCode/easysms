import React from 'react';
import './Preloader.css';
import preloader_img from '../images/preload.gif';

const Preloader = ()=>{
    return (
        <div className="preloader">
            <img className="preloader--img" src={preloader_img} alt="" />
        </div>
    )
};

export default Preloader;