import React from "react";
// import SocialFlow from "../main_page/SocialFlow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  faFacebook,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
  
const Footer = () => {
  return (
    <div className="Footer">
        <hr/>
        <div className="footer">
                    <div className="FooterMyWorkLink  FooterMyWork"  >
                        <a href="mailto: savuroxanaflorina20@yahoo.com " className="FooterMyWorkLinkCode" >
                        adresa-email@yahoo.com
                        </a>
                        <a href="tel:0753814032" className="FooterMyWorkLinkCode" >
                            0753.123.456
                        </a>
                    </div>  


                    <div className="FooterMyWorkText  FooterMyWork"  >
                       <div> 
                            <p className="footerMyWorkText">SRF</p>
                        </div>
                    </div>  

                    <div className="FooterMyWorkText  FooterMyWork socialContainerFooter"  >
                        <p className="socialContainerFooter">
                            <a
                                href="https://ro.linkedin.com/"
                                className="linkedinFooter socialFooter FooterMyWorkLinkCode"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a
                                href="https://www.facebook.com/learnbuildteach/"
                                className="facebookFooter socialFooter FooterMyWorkLinkCode"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a
                                href="http://www.instagram.com/larnbuildteach"
                                className="instagramFooter socialFooter FooterMyWorkLinkCode"
                             >
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </p>
                    </div>  
                    
            </div><hr/>

    </div>  
  );
};
export default Footer;