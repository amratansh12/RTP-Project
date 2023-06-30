import email from '../Resources/email.png';
import location from '../Resources/location.png';
import map from '../Resources/map.png';

function Footer(){
    return(
        <footer>
        <div className="frame">
          <div className="contact">
            <div id="p1">Contact us</div>
                <div id="p2">
                    <img src={email} className="email" alt="" />
                    <p className="mail">loremipsum@lora.iitr.ac.in</p>
                </div>
                <div id="p3">
                    <img src={location} className="location" alt="" />
                    <p className="place">lora lasum, Ipsum dolor se am</p>
                </div>
            </div>
        <div className="quick">
            <div id="p4">Quick Links</div>
                <div id="p5">Home</div>
                    <div id="p6">Telescopes</div>
                <div id="p7">Publications</div>
            <div id="p8">Team</div>
        </div>
        <div id="map">
            <div id="p9">Maps</div>
                <img src={map} className="maps" alt="" />
            </div>
        </div>
      </footer>
    );
}

export default Footer;