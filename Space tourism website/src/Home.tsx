import backgroundImg from '/background-home-desktop.jpg'

export default function Home(){
    return (
        <div>
            <img src={backgroundImg}></img>
            <button id="explore">EXPLORE</button>
            <button id="hidden"></button>
        <div id="introduction">
            <h5 >So, you want to travel to</h5>
            <h1 id="space">SPACE</h1>
            <article id="intro">Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!</article>
        </div>
    </div>
    )
}