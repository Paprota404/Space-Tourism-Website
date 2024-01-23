import { useState, useEffect } from 'react'
import './App.css'
import Crew from './Crew';
import Destination from './Destination';
import backgroundImgDesktop from '/background-home-desktop.jpg';
import backgroundImgMobile from '/background-home-mobile.jpg';
import backgroundImgTablet from '/background-home-tablet.jpg';
import Technology from './Technology';
import {motion} from 'framer-motion';



const sections = ['Home', 'Destination', 'Crew', 'Technology'];

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
     
      
      
     
      {currentSection === 'Home' && <Home setCurrentSection={setCurrentSection}/>}
      {currentSection === 'Destination' && <Destination />}
      {currentSection === 'Crew' && <Crew />}
      {currentSection === 'Technology' && <Technology />} 
      
    </>
  )
}

//ma sie zmieniac backgroudn image on resize

export default App



function Home({setCurrentSection}: { setCurrentSection: (section: string) => void }){

  const [backgroundImage,setBackgroundImage] = useState(backgroundImgDesktop);
  const [backgroundHeight, setBackgroundHeight] = useState(100);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setBackgroundImage(backgroundImgMobile);
        setBackgroundHeight(120);
      } else if(window.innerWidth < 1200) {
        setBackgroundImage(backgroundImgTablet);
      }
      else{
        setBackgroundImage(backgroundImgDesktop);
        setBackgroundHeight(100);
      }
    };
 
    window.addEventListener('resize', handleResize);
 
    // Call the function once to set the initial image
    handleResize();
 
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div style={{backgroundImage:`url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      position:"absolute",
      zIndex:"1",
      height: `${backgroundHeight}%`,
      width: '100%'}}>
          
      <motion.div  initial={{ scale: 1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }} >
      <button id="explore" >EXPLORE</button>
      <button id="hidden" onClick={() => setCurrentSection('Destination')}></button>
      <div id="introduction">
          <h5 >SO,YOU WANT TRAVEL TO</h5>
          <h1 id="space">SPACE</h1>
          <article id="intro">Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</article>
      </div>
      </motion.div>
      </div>
  )
}
