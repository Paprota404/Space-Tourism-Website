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

   



    return (
        <div style={{backgroundImage:`url(${backgroundIMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100vh',
        position:"absolute",
        zIndex:"1",
        width: '100%'}}>

            <h5 id="destination"><span style={{opacity:0.25}}>03&nbsp;</span>SPACE LAUNCH 101</h5>
        
            <div id="tech-buttons">

            <svg id="technology-button" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <a onClick={() => {
            let newImage = "/image-launch-vehicle-portrait.jpg";
            if (window.innerWidth < 1200) {
                newImage = "/image-launch-vehicle-landscape.jpg";
            }
            changeTechnology({name:"LAUNCH VEHICLE", desc:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!", image: newImage});
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
            changeTechnology({name:"LAUNCH VEHICLE", desc:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!", image: newImage});
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
            changeTechnology({name:"LAUNCH VEHICLE", desc:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!", image: newImage});
}}>
            <circle opacity="0.25" cx="40" cy="40" r="39.5" stroke="white"/>
            <text id="tech-number" x="42" y="45" text-anchor="middle" dominant-baseline="middle" fill="black">3</text>
            </a>
            </svg>
            </div>

             <div className="technology-intro" style={{left:"25%"}} id="introduction">
                <span id="subheading2" style={{fontSize:"16px",marginTop:"5rem"}}>THE TERMINOLOGY...</span>
                <h3>{technology.name}</h3>
                <article>{technology.desc}</article>
            </div>
            <img id="technology-image" src={technology.image}></img>
        </div>
    )
}