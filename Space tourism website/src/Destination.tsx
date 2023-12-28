import backgroundImg from '/background-destination-desktop.jpg';
import Moon from '/image-moon.png';
import { useState, useEffect } from 'react';
import Mars from '/image-mars.png';
import Titan from '/image-titan.png';
import Europa from '/image-europa.png'
import backgroundImgMobile from "/background-destination-mobile.jpg";

export default function Destination(){

    const [planet,setPlanet] = useState({name:"MOON",desc:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",dist:"384,400 km",time:"3 days",link:"/image-moon.png"});

function changePlanet(planeta){
    setPlanet(planeta);
}
const [backgroundImage,setBackgroundImage] = useState(backgroundImg);

useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setBackgroundImage(backgroundImgMobile);
      }
      else{
        setBackgroundImage(backgroundImg)
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
        backgroundAttachment: 'fixed', 
        height: '100%',
        position:"absolute",
        zIndex:"1",
        width: '100%'}}>

            <h5 id="destination"><span style={{opacity:0.25}}>01&nbsp;</span> PICK YOUR DESTINATION</h5>
            <img id="planet" src={planet.link}></img>

            <div id="planet-description">
            <div id="planets">
                <a id="planeta" onClick={()=>changePlanet({name:"MOON",desc:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",dist:"384,400 km",time:"3 days",link:"/image-moon.png"})} >MOON</a>

                <a id="planeta" onClick={()=>changePlanet({name:"MARS",desc:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountainin our solar system. It’s two and a half times the size of Everest!",dist:"225 mil. km", time:"9 months",link:"/image-mars.png"})} >MARS</a>

                <a id="planeta" onClick={()=>changePlanet({name:"EUROPA",desc:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",dist:"628 mil. km", time:"3 years",link:"/image-europa.png"})}>EUROPA</a>

                <a id="planeta" onClick={()=>changePlanet({name:"TITAN",desc:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",dist:"1.6 bil. km", time:"7 years",link:"/image-titan.png"})}>TITAN</a>
            </div>

        <h2 id="planet-name">{planet.name}</h2>

        <article>{planet.desc}</article>
        <hr id="planet-line" style={{opacity:"0.2",marginTop:"3rem",marginBottom:"2rem"}}></hr>

        <div id="addons">
        <span id="subheading2">Avg. distance</span>
        <span id="subheading2"> Est. travel time</span>
        <span id="subheading">{planet.dist}</span>
        <span id="subheading">{planet.time}</span>
        </div>
    </div>
</div>
    )
}