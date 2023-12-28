import {useState,useEffect} from "react";
import backgroundIMG from "/background-technology-desktop.jpg";
import vehicle from "/image-launch-vehicle-portrait.jpg";
import capsule from "/image-space-capsule-portrait.jpg";
import spaceport from "/image-space-port-portrait.jpg";
import spaceportM from "/image-space-port-landscape.jpg";
import vehicleM from "image-space-port-landscape.jpg";
import capsuleM from "image-space-capsule-landscape.jpg";

export default function Technology(){
    const [technology, setTechnology] = useState(() => {
        let image = "/image-launch-vehicle-portrait.jpg";
        if (window.innerWidth < 1200) {
          image = "/image-launch-vehicle-landscape.jpg";
        }
        return {
          name: "LAUNCH VEHICLE",
          desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          image: image
        };
       });

    function changeTechnology(tech){
        setTechnology(tech);
    }

    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth < 1200) {
              setTechnology(prevState => ({...prevState,image:prevState.image.replace("portrait.jpg","landscape.jpg")}))
            }
            else{
              setTechnology(prevState=> ({...prevState,image:prevState.image.replace("landscape.jpg","portrait.jpg")}))
            }
          };
          window.addEventListener("resize",handleResize);

          return () => {
            window.removeEventListener("resize",handleResize);
          };
    },[]);

    const [backgroundHeight, setBackgroundHeight] = useState(100);

useEffect(() => {
    const handleResizes = () => {
      if (window.innerWidth <= 600) {
        setBackgroundHeight(140);
      } else if(window.innerWidth>600&&window.innerWidth<1200)
        setBackgroundHeight(120);
      else {
        setBackgroundHeight(100);
      }
    };
   
    window.addEventListener('resize', handleResizes);
   
    // Call the function once to set the initial height
    handleResizes();
   
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResizes);
    };
   }, []);
   

   



    return (
        <div style={{backgroundImage:`url(${backgroundIMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: `${backgroundHeight}%`,
        position:"absolute",
        zIndex:"1",
        width: '100%'}}>

            <h5 id="destination"><span style={{opacity:0.25}}>03&nbsp;</span>SPACE LAUNCH 101</h5>

            <div className="technology-intro" style={{left:"25%"}} id="introduction">
              
            <div id="tech-buttons">
            <svg id="technology-button" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <a onClick={() => {
            let newImage = "/image-launch-vehicle-portrait.jpg";
            if (window.innerWidth < 1200) {
                newImage = "/image-launch-vehicle-landscape.jpg";
            }
            changeTechnology({name:"LAUNCH VEHICLE", desc:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall.", image: newImage});
}}>

            <circle opacity="0.25" cx="40" cy="40" r="39.5"  stroke="white"/>
            <text id="tech-number" x="42" y="45" text-anchor="middle" dominant-baseline="middle" fill="black">1</text>
            </a>
            </svg>

            <svg id="technology-button" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <a onClick={() => {
            let newImage = "/image-spaceport-portrait.jpg";
            if (window.innerWidth < 1200) {
                newImage = "/image-spaceport-landscape.jpg";
            }
            changeTechnology({name:"Space Port", desc:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for shipsor airport for aircraft. Based in the famous Cape Canaveral.", image: newImage});
}}>
            <circle opacity="0.25" cx="40" cy="40" r="39.5"stroke="white"/>
            <text id="tech-number" x="42" y="45" text-anchor="middle" dominant-baseline="middle" fill="black">2</text>
            </a>
            </svg>

            <svg id="technology-button" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <a onClick={() => {
            let newImage = "/image-space-capsule-portrait.jpg";
            if (window.innerWidth < 1200) {
                newImage = "/image-space-capsule-landscape.jpg";
            }
            changeTechnology({name:"Space Capsule", desc:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight.", image: newImage});
}}>
            <circle opacity="0.25" cx="40" cy="40" r="39.5" stroke="white"/>
            <text id="tech-number" x="42" y="45" text-anchor="middle" dominant-baseline="middle" fill="black">3</text>
            </a>
            </svg>
            </div>

            
                <span id="subheading2" style={{fontSize:"16px",marginTop:"5rem"}}>THE TERMINOLOGY...</span>
                <h3>{technology.name}</h3>
                <article>{technology.desc}</article>
                
            </div>
            <img id="technology-image" src={technology.image}></img>
        </div>
    )
}