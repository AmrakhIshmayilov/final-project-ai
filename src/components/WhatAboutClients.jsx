import React from "react"; 
import clientsImg from "../assets/images/clients.svg"

const WhatAboutClients = () => {
     
    return (
        <div className="about-clients row"> 
       
       
       
       
        <div className="left-side col-12 col-md-6" >
            <h1 className="text-white">What our clients say about our awesome solutions</h1>
            <p className="text-white">To take a trivial example, which of us ever undertakes <br /> laborious physical exercise, except to obtain some <br /> advantage from it who do not know.</p>
            <p className="text-white">Lorem ipsum is placeholder text commonly used in the  <br />graphic, print, and publishing .</p>
            
            
            
            </div>
        
        
        
        
        
        
        
        
        
        
        <div className="right-side col-12 col-md-6">
        <img src={clientsImg} alt=""  className="w-100"/>

        </div>
        
        
        
        
        </div>
    )
}

export default WhatAboutClients