import "./index.css";
import Email from "../../assets/email.png";
import Location from "../../assets/location.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-contact">
                <p className="footer-contact-heading">Contact us</p>
                <p className="footer-contact-mail">
                    <a href="mailto:loremipsum@lora.iitr.ac.in">
                        <img src={Email} className="email" alt="" />
                        <span>loremipsum@lora.iitr.ac.in</span>
                    </a>
                </p>
                <p className="footer-contact-location">
                    <a href="https://goo.gl/maps/VGh7aQd7Mpje5X7J6">
                        <img src={Location} className="location" alt="" />
                        <span>lora lasum, Ipsum dolor se am</span>
                    </a>
                </p>
            </div>

            <div className="footer-quick">
                <p className="footer-quick-heading">Quick Links</p>
                <NavLink className="footer-quick-link" to="/">Home</NavLink>
                <NavLink className="footer-quick-link" to="/telescopes">Telescopes</NavLink>
                <NavLink className="footer-quick-link" to="/publications">Publications</NavLink>
                <NavLink className="footer-quick-link" to="/team">Team</NavLink>
            </div>

            <div className="footer-map">
                <p className="footer-map-heading">Maps</p>
                <p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13839.777706966559!2d77.8772287871582!3d29.865876499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3650bfe37a7%3A0xa9d19b15af050467!2sIndian%20Institute%20Of%20Technology%E2%80%93Roorkee%20(IIT%E2%80%93Roorkee)!5e0!3m2!1sen!2sin!4v1688608140318!5m2!1sen!2sin"
                        title="IIT Roorkee Map"
                        loading="lazy"
                    >
                    </iframe>
                </p>
            </div>


        </div>
    )
}

export default Footer;