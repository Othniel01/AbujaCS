import sponsorOne from "../img/sponsors/sponsor1.png";
import sponsorTwo from "../img/sponsors/sponsor2.png";
import sponsorThree from "../img/sponsors/sponsor3.png";
import sponsorFour from "../img/sponsors/sponsor4.jpg";
import sponsorFive from "../img/sponsors/sponsor5.png";
import sponsorSix from "../img/sponsors/sponsor6.png";
import sponsorSeven from "../img/sponsors/sponsor7.jpg";
import sponsorEight from "../img/sponsors/sponsor8.png";
import headerStar from "../img/star.png";
import Marquee from "react-fast-marquee";
// import SponsorCarousel from "./SponsorCarousel";

// const OPTIONS = {
//   dragFree: true,
//   direction: "rtl",
//   loop: true,
//   containScroll: "trimSnaps",
//   slidesToScroll: 1,
// };

export default function SponsorSection() {
  return (
    <div className="sponsorSection">
      <div className="primaryHead">
        <img className="headerStar pb-1" src={headerStar} alt="#" />
        <h1 className="primaryHeading">Our Valued Sponsors</h1>
      </div>
      <p className="pt-1 text-wrap790">
        This event wouldn't have been possible without the support of our
        esteemed sponsors. We extend our heartfelt gratitude to
      </p>
      <div className="marqueeContainer">
        <Marquee pauseOnHover="true">
          <div className="marqueeSlide">
            <img className="sponsorImage" src={sponsorOne} alt="#" />
          </div>
          <div className="marqueeSlide">
            <img className="sponsorImage" src={sponsorTwo} alt="#" />
          </div>
          <div className="marqueeSlide">
            <img className="sponsorImage" src={sponsorThree} alt="#" />
          </div>
          <div className="marqueeSlide">
            <img className="sponsorImage" src={sponsorFour} alt="#" />
          </div>
          <div className="marqueeSlide">
            <img className="sponsorImage" src={sponsorFive} alt="#" />
          </div>
          <div className="marqueeSlide">
            <img className="sponsorImage" src={sponsorSix} alt="#" />
          </div>
          <div className="marqueeSlide">
            <img className="sponsorImage" src={sponsorSeven} alt="#" />
          </div>
          <div className="marqueeSlide">
            <img className="sponsorImage" src={sponsorEight} alt="#" />
          </div>
        </Marquee>
      </div>

      {/* <div className="sponsorRow">
        <img className="sponsorImage" src={hiltonLogo} alt="#" />
        <img className="sponsorImage" src={nyscLogo} alt="#" />
        <img className="sponsorImage" src={cookLogo} alt="#" />
        <img className="sponsorImage" src={crnLogo} alt="#" />
      </div> */}
    </div>
  );
}
