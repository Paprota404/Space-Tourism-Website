import backgroundImg from '/background-destination-desktop.jpg'

export default function Destination(){
    return (
        <div style={{backgroundImage:`url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100vh',
        width: '100%'}}>
            <h5 id="destination"><span style={{opacity:0.25}}>01&nbsp;</span> PICK YOUR DESTINATION</h5>
            
  Mars
  Europa
  Titan

  Mars

  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!

  Avg. distance
  225 mil. km

  Est. travel time
  9 months
        </div>
    )
}