import { Link } from "react-router-dom";

import './Footer.css';

import facebookIcon from '../img/facebook.png'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import youtube from '../img/youtube.png'


function Footer() {
    return <>
    <footer>
        <div className="footer-content">
          <h3>Anime World</h3>
          <p>
            This site is not store any video on its server. All contents are provided by non-affiliated third party.
          </p>
          <ul className="socials">
            <li>
              <Link to="/">
                <img src={facebookIcon} alt="facebook-icon" className="fa fa-facebook"/>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={instagram} alt="instagram-icon" className="fa fa-instagram"/>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={twitter} alt="twitter-icon" className="fa fa-twitter"/>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={youtube} alt="youtube-icon" className="fa fa-youtube"/>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={linkedin} alt="linkedin-icon" className="fa fa-linkedin-square"/>
              </Link>
            </li>
          </ul>
        <div className="footer-bottom">
          <p>
            copyright &copy;2023 <Link to="#">All rights reserved</Link>{" "}
          </p>
        {/* <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
          </ul>
        </div> */}
        </div>
        </div>
      </footer>
    </>
}

export default Footer;