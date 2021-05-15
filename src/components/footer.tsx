import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props {

}

const Footer = (props: Props) => {
   return (
      <div className="footer" id="footer">
         <div className="top-section">
            <img src="/assets/logos/logoBig.png" alt="" />
            <div className="">
               <h5 className="sub-heading t-c">Connect with is</h5>
               <div className="socials">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faLinkedin} />
               </div>
            </div>
         </div>
         <div className="middle-section">
            <h5 className="sub-heading t-c">Contact US</h5>
            <p className="para-text">black@money.com</p>
            <p className="para-text">420189120-</p>
            <p className="para-text"></p>
         </div>
         <div className="bottom-section">
            <p className="para-text">
               2021 Bullsorg. All rights reserved.
            </p>
         </div>
      </div>
   )
}

export default Footer
