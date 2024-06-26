import { useState, useEffect } from "react";
import backgroundIMG from "/background-crew-desktop.jpg";
import { motion } from "framer-motion";

export default function Crew() {
  const [crew, changeCrew] = useState({
    rank: "Commander",
    name: "DOUGLAS HURLEY",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/image-douglas-hurley.png",
  });

  interface Crew {
    rank: string;
    name: string;
    desc: string;
    image: string;
  }

  function changeCrewMember(crew: Crew) {
    changeCrew(crew);
  }

  const [circle1Opacity, setCircle1Opacity] = useState("1");
  const [circle2Opacity, setCircle2Opacity] = useState("0.174");
  const [circle3Opacity, setCircle3Opacity] = useState("0.174");
  const [circle4Opacity, setCircle4Opacity] = useState("0.174");

  const changeOpacity = (setter: (value: string) => void) => {
    setCircle1Opacity("0.174");
    setCircle2Opacity("0.174");
    setCircle3Opacity("0.174");
    setCircle4Opacity("0.174");
    setter("1");
  };

  const [backgroundHeight, setBackgroundHeight] = useState(100);

  useEffect(() => {
    const handleResizes = () => {
      if (window.innerWidth < 600) {
        setBackgroundHeight(140);
      } else if (window.innerWidth > 600 && window.innerWidth < 1200)
        setBackgroundHeight(130);
      else {
        setBackgroundHeight(100);
      }
    };

    window.addEventListener("resize", handleResizes);

    handleResizes();

    return () => {
      window.removeEventListener("resize", handleResizes);
    };
  }, []);

  const [imageLoaded, setImageLoaded] = useState(false); // New state to track image load status

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <img
        src={backgroundIMG}
        alt="Background"
        style={{ display: "none" }}
        onLoad={handleImageLoad}
      />
      {!imageLoaded ? (
        <div className="skeleton-screen">
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${backgroundIMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: `${backgroundHeight}%`,
            position: "absolute",
            zIndex: "1",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h5 id="destination">
              <span style={{ opacity: 0.25 }}>02&nbsp;</span>MEET YOUR CREW
            </h5>

            <div id="introduction">
              <h4 style={{ opacity: 0.5042, marginTop: "6rem" }}>
                {crew.rank}
              </h4>
              <h3 id="crew-name">{crew.name}</h3>
              <article id="crew-desc">{crew.desc}</article>

              <svg
                id="crew-button"
                xmlns="http://www.w3.org/2000/svg"
                width="132"
                height="15"
                viewBox="0 0 132 15"
                fill="none"
              >
                <a
                  onClick={() =>
                    changeCrewMember({
                      rank: "Commander",
                      name: "DOUGLAS HURLEY",
                      desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
                      image: "/image-douglas-hurley.png",
                    })
                  }
                >
                  <circle
                    opacity={circle1Opacity}
                    onClick={() => changeOpacity(setCircle1Opacity)}
                    cx="7.5"
                    cy="7.5"
                    r="7.5"
                    fill="white"
                  />
                </a>

                <a
                  onClick={() =>
                    changeCrewMember({
                      rank: "Flight Engineer",
                      name: "Anousheh Ansari",
                      desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
                      image: "image-anousheh-ansari.png",
                    })
                  }
                >
                  <circle
                    opacity={circle2Opacity}
                    onClick={() => changeOpacity(setCircle2Opacity)}
                    cx="46.5"
                    cy="7.5"
                    r="7.5"
                    fill="white"
                  />
                </a>

                <a
                  onClick={() =>
                    changeCrewMember({
                      rank: "Pilot",
                      name: "Viktor Glover",
                      desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
                      image: "image-victor-glover.png",
                    })
                  }
                >
                  <circle
                    opacity={circle3Opacity}
                    onClick={() => changeOpacity(setCircle3Opacity)}
                    cx="85.5"
                    cy="7.5"
                    r="7.5"
                    fill="white"
                  />
                </a>

                <a
                  onClick={() =>
                    changeCrewMember({
                      rank: "Mission Specialist",
                      name: "Mark Shuttleworth",
                      desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system.",
                      image: "image-mark-shuttleworth.png",
                    })
                  }
                >
                  <circle
                    opacity={circle4Opacity}
                    onClick={() => changeOpacity(setCircle4Opacity)}
                    cx="124.5"
                    cy="7.5"
                    r="7.5"
                    fill="white"
                  />
                </a>
              </svg>
            </div>

            <img id="crew-image" src={crew.image}></img>
          </motion.div>
        </div>
      )}
    </>
  );
}
