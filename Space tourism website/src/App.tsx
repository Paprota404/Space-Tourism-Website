import { useState } from 'react'
import './App.css'

import Destination from './Destination';
import backgroundImg from '/background-home-desktop.jpg'



const sections = ['00 Home', '01 Destination', '02 Crew', '03 Technology'];

function App() {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  

  return (
    <>
      <svg id="home-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17"/>
      </svg>

      <hr id="line"></hr>
       <nav style={{zIndex:"2"}} id="navbar">
       {sections.map((section, index) => (
         <a 
           key={index} 
           className={currentSection === section ? 'active' : ''} 
           onClick={() => setCurrentSection(section)}
         >
           {section}
         </a>
       ))}
      </nav>
     
      
      
     
      {currentSection === '00 Home' && <Home setCurrentSection={setCurrentSection}/>}
      {currentSection === '01 Destination' && <Destination />}
      {/*{currentSection === '02 Crew' && <Crew />}
       {currentSection === '03 Technology' && <Technology />} */}
      
    </>
  )
}

export default App

function Home({setCurrentSection}){
  return (
      <div style={{backgroundImage:`url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      position:"absolute",
      zIndex:"1",
      height: '100vh',
      width: '100%'}}>
          
          
      <button id="explore" >EXPLORE</button>
      <button id="hidden" onClick={() => setCurrentSection('01 Destination')}></button>
      <div id="introduction">
          <h5 >SO,YOU WANT TRAVEL TO SPACE</h5>
          <h1 id="space">SPACE</h1>
          <article id="intro">Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</article>
      </div>
      
      </div>
  )
}
