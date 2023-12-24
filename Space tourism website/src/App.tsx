import { useState } from 'react'
import './App.css'
import Home from './Home';
import Destination from './Destination';



const sections = ['00 Home', '01 Destination', '02 Crew', '03 Technology'];

function App() {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  

  return (
    <>
    
       <nav id="navbar">
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
     
      
      
     
      {currentSection === '00 Home' && <Home />}
      {currentSection === '01 Destination' && <Destination />}
      {/*{currentSection === '02 Crew' && <Crew />}
       {currentSection === '03 Technology' && <Technology />} */}
      
    </>
  )
}

export default App
