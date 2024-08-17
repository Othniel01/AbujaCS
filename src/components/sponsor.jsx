import hiltonLogo from "../img/sponsors/hilton.png";
import nyscLogo from "../img/sponsors/nysc.png";
import cookLogo from "../img/sponsors/logoACS.png";
import crnLogo from "../img/sponsors/CRA.png";
import headerStar from "../img/star.png";

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
      <div className="sponsorRow">
        <img className="sponsorImage" src={hiltonLogo} alt="#" />
        <img className="sponsorImage" src={nyscLogo} alt="#" />
        <img className="sponsorImage" src={cookLogo} alt="#" />
        <img className="sponsorImage" src={crnLogo} alt="#" />
      </div>
    </div>
  );
}
