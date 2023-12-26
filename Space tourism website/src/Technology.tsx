import {useState} from "react";
import backgroundIMG from "/background-technology-desktop.jpg";
import vehicle from "/image-launch-vehicle-portrait.jpg";
import capsule from "/image-space-capsule-portrait.jpg";
import spaceport from "/image-space-port-portrait.jpg";

export default function Technology(){
    const [technology,setTechnology] = useState({name:"LAUNCH VEHICLE",desc:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",image:"/image-launch-vehicle-portrait.jpg"});

    function changeTechnology(tech){
        setTechnology(tech)
    }




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

            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <a onClick={()=>changeTechnology({name:"LAUNCH VEHICLE",desc:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",image:"/image-launch-vehicle-portrait.jpg"})}>
            <circle opacity="0.25" cx="40" cy="40" r="39.5"  stroke="white"/>
            <text id="tech-number" x="42" y="45" text-anchor="middle" dominant-baseline="middle" fill="black">1</text>
            </a>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <a  onClick={()=>changeTechnology({name:"SPACEPORT",desc:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",image:"/image-spaceport-portrait.jpg"})}>

            <circle opacity="0.25" cx="40" cy="40" r="39.5"stroke="white"/>
            <text id="tech-number" x="42" y="45" text-anchor="middle" dominant-baseline="middle" fill="black">2</text>
            </a>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <a onClick={()=>changeTechnology({name:"Space capsule",desc:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema,  and plenty of other activities to keep you entertained.",image:"/image-space-capsule-portrait.jpg"})}>
            <circle opacity="0.25" cx="40" cy="40" r="39.5" stroke="white"/>
            <text id="tech-number" x="42" y="45" text-anchor="middle" dominant-baseline="middle" fill="black">3</text>
            </a>
            </svg>
            </div>

             <div style={{left:"25%"}} id="introduction">
                <span id="subheading2" style={{fontSize:"16px",marginTop:"5rem"}}>THE TERMINOLOGY...</span>
                <h3 style={{width:"1000px"}}>{technology.name}</h3>
                <article>{technology.desc}</article>
            </div>
            <img id="technology-image" src={technology.image}></img>
        </div>
    )
}