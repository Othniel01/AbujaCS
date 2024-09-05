import transLogo from "../img/transparentLogo.png";
import arc from "../img/highlightArc.png";
import videoSource from "../video/acstwo.mov";

export default function AboutSection() {
  return (
    <div className="aboutSection">
      <img src={transLogo} alt="#" className="transLogo" />

      <div className="aboutTextSection">
        <h1>
          <span className="outlineText"> About </span>
          The Event
        </h1>
        <p>
          Experience the incredible journey of Abuja Culinary School as we
          present "The Culinary Triumph: Breaking the Guinness World Record", a
          captivating movie documentary. This exclusive screening takes you
          behind the scenes, revealing the passion, perseverance, and culinary
          artistry that led to our historic achievement.
        </p>

        <div className="aboutFlex">
          <video className="newVideo" controls playsInline>
            <source src={videoSource} type="video/mp4" />
            <source src={videoSource} type="video/mov" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="aboutFlexTwo">
          <h1>
            <span className="outlineText">Event </span>
            Highlights
          </h1>

          <div className="aboutFlexTwoContainer">
            <div className="highlightBoxOne">
              <img src={arc} alt="#" />
              <span>
                <h3>Documentary Screening</h3>
                <p className="mt-1">
                  Witness the entire journey from concept to execution, as our
                  chefs and students strive to break the Guinness World Record.
                  The documentary captures the highs, the challenges, and the
                  ultimate victory in a way that will inspire and entertain.
                </p>
              </span>
            </div>
            <div className="highlightBoxOne">
              <img src={arc} alt="#" />
              <span>
                <h3>Interactive Q&A Session:</h3>
                <p className="mt-1">
                  Engage with the chefs, filmmakers, and key participants in a
                  live Q&A session following the screening. Learn about the
                  intricacies of the record-breaking attempt and the dedication
                  that made it possible.
                </p>
              </span>
            </div>
            <div className="highlightBoxOne">
              <img src={arc} alt="#" />
              <span>
                <h3>Special Features:</h3>
                <p className="mt-1">
                  Enjoy exclusive footage, interviews, and behind-the-scenes
                  moments that didn't make it into the final cut of the
                  documentary.
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="contactSection">
          <div className="contactSectionText">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://forms.gle/aNDjHe9mrN3nvxnVA"
            >
              Click To Book<span className="outlineText"> A Seat</span>
            </a>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.73192342006!2d7.408440799903628!3d9.088167926075108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75b2d149b85d%3A0xbc47e66771eff717!2sAbuja%20Culinary%20School...best%20culinary%20school%20in%20Nigeria!5e0!3m2!1sen!2sng!4v1723811549567!5m2!1sen!2sng"
                allowFullScreen=""
                title="map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="subscribeBox">
              <h1>
                Subscribe to our <br /> newsletter
              </h1>

              <div className="containSubscribeInput">
                <input placeholder="Email" type="text" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
