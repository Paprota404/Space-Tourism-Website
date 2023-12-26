import { useState } from "react";
import backgroundIMG from '/background-crew-desktop.jpg';
import douglas from '/image-douglas-hurley.png';
import ansari from 'image-anousheh-ansari.png';

export default function Crew(){

    const [crew,changeCrew] = useState({rank:"Commander",name:"DOUGLAS HURLEY",desc:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",image:"/image-douglas-hurley.png"})

function changeCrewMember(crew){
    changeCrew(crew);
}

    const [circle1Opacity, setCircle1Opacity] = useState("1");
    const [circle2Opacity, setCircle2Opacity] = useState("0.174");
    const [circle3Opacity, setCircle3Opacity] = useState("0.174");
    const [circle4Opacity, setCircle4Opacity] = useState("0.174");


const changeOpacity = (setter) => {
    setCircle1Opacity("0.174");
    setCircle2Opacity("0.174");
    setCircle3Opacity("0.174");
    setCircle4Opacity("0.174");
    setter("1");
}

    return (
        <div style={{backgroundImage:`url(${backgroundIMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100vh',
        position:"absolute",
        zIndex:"1",
        width: '100%'}}>

            <h5 id="destination"><span style={{opacity:0.25}}>02&nbsp;</span>MEET YOUR CREW</h5>

            <div id="introduction">
                <h4 style={{opacity: 0.5042,marginTop:"5rem"}}>{crew.rank}</h4>
                <h3 style={{width:"1000px"}}>{crew.name}</h3>
                <article>{crew.desc}</article>
            </div>
                <svg id="crew-button" style={{marginTop:"4rem"}} xmlns="http://www.w3.org/2000/svg" width="132" height="15" viewBox="0 0 132 15" fill="none">


                <a onClick={()=>changeCrewMember({rank:"Commander",name:"DOUGLAS HURLEY",desc:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",image:"/image-douglas-hurley.png"})}>
                <circle opacity={circle1Opacity} onClick={()=>changeOpacity(setCircle1Opacity)} cx="7.5" cy="7.5" r="7.5" fill="white"/>
                </a>

                <a onClick={()=>changeCrewMember({rank:"Flight Engineer",name:"Anousheh Ansari",desc:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",image:"image-anousheh-ansari.png"})}> 
                <circle opacity={circle2Opacity} onClick={()=>changeOpacity(setCircle2Opacity)} cx="46.5" cy="7.5" r="7.5" fill="white"/>
                </a>

                <a onClick={()=>changeCrewMember({rank:"Pilot",name:"Viktor Glover",desc:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",image:"image-victor-glover.png"})}>

                <circle opacity={circle3Opacity}  onClick={()=>changeOpacity(setCircle3Opacity)}  cx="85.5" cy="7.5" r="7.5" fill="white"/>
                </a>

                <a onClick={()=>changeCrewMember({rank:"Mission Specialist",name:"Mark Shuttleworth",desc:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",image:"image-mark-shuttleworth.png"})}>

                <circle opacity={circle4Opacity}  onClick={()=>changeOpacity(setCircle4Opacity)} cx="124.5" cy="7.5" r="7.5" fill="white"/>
                </a>
</svg>
            
            <img id="crew-image" src={crew.image}>
            </img>

        </div>
    )
}