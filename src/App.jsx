import React, { useState, useEffect } from "react";
import guinness from "./img/guinness.png";
import acsLogo from "./img/logoACS.png";
import backDrop from "./img/seats.jpg";
import headerStar from "./img/star.png";
import EmblaCarousel from "./components/EmblaCarousel.jsx";
import Timercountdown from "./components/timer.jsx";
import tiltSliderOne from "./img/breakingRecordsThree.jpg";
import tiltSliderTwo from "./img/breakingRecordsOne.png";
import tiltSliderFour from "./img/breakingRecordsFour.jpg";
import tiltSliderThree from "./img/breakingRecordsFive.png";
import SponsorSection from "./components/sponsor.jsx";
import videoIpad from "./img/ipad.png";
import AboutSection from "./components/about.jsx";

const OPTIONS = {
  dragFree: true,
  direction: "rtl",
  loop: true,
  containScroll: "trimSnaps",
  slidesToScroll: 2,
};

function App() {
  const [isNavBarDark, setIsNavBarDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY; // Get the current scroll position
      const threshold = 700; // Set your desired scroll distance threshold

      if (scrollDistance > threshold) {
        setIsNavBarDark(true);
      } else {
        setIsNavBarDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="contain">
      <div className="heroSection">
        <div className="videoContainer">
          <div className={isNavBarDark ? "navBarDark" : "navBar"}>
            <img src={acsLogo} alt="" />
            <div className="navLinks">
              <a href="#">+234-811-988-0434</a>
              <a className="participateBtn" href="#">
                Participate
              </a>
            </div>
          </div>
          {/* <video className="backgroundVideo" autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img className="backgroundVideo" src={backDrop} alt="" />

          <div className="textContainer">
            <img className="guinessLogo" src={guinness} alt="#" />
            <h1>BREAKING THE WORLD RECORD</h1>
            <p>
              Join us for a movie documentary about our monumental achievement
              which was not just a day’s work but the culmination of months of
              preparation, and dedication. Our students, chefs, and community
              came together to set a new benchmark in the culinary world,
              showcasing not only our skills but also our commitment to
              excellence.
            </p>

            <Timercountdown />

            <a className="participateBtn headBtn mt-4" href="#">
              Participate
            </a>
          </div>
        </div>
      </div>

      <div className="showcase">
        <div className="primaryHead">
          <img className="headerStar pb-1" src={headerStar} alt="#" />
          <h1 className="primaryHeading">The Day We Made History</h1>
        </div>
        <p className="pt-1">
          On Sunday, March 3rd 2024, Abuja Culinary School made history by
          breaking the Guinness World Record for the “Most Tickets Booked for an
          Online Cooking Tutorial”. This monumental achievement was not just a
          day’s work but the culmination of months of preparation, and
          dedication. Our students, chefs, and community came together to set a
          new benchmark in the culinary world, showcasing not only our skills
          but also our commitment to excellence.
        </p>

        <EmblaCarousel options={OPTIONS}>
          <div className="customSlide">
            <img className="slideImg" src={tiltSliderOne} alt="#" />
          </div>
          <div className="customSlide">
            <img className="slideImg" src={tiltSliderTwo} alt="#" />
          </div>
          <div className="customSlide">
            <img className="slideImg" src={tiltSliderThree} alt="#" />
          </div>
          <div className="customSlide">
            <img className="slideImg" src={tiltSliderFour} alt="#" />
          </div>
        </EmblaCarousel>
      </div>

      <SponsorSection />

      <AboutSection />
    </div>
  );
}

export default App;
