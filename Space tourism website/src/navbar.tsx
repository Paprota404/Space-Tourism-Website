import React, { useState } from 'react';

export default function Navbar(){
  //make navbar interactive
  
  const [current,setCurrent] = useState("home");
  
  
  return (
      <div>
        <svg id="home-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17"/>
        </svg>
        <hr id="line" width="200"></hr>
        
        <nav id="navbar">
        
        <a>00 Home</a>
        <a>01 Destination</a>
        <a>02 Crew</a>
        <a>03 Technology</a>
        
        </nav>
      </div>
    );
}

//Make a navbar