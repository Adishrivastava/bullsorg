import React from 'react'
import { HashLink } from 'react-router-hash-link';
// import { Link } from 'react-router-dom'
interface Props {

}

const Navbar = (props: Props) => {
   return (
      <nav className="navbar">
         <div className="nav-inner">
            <img
               src="/assets/logos/logoBig.png"
               style={{ width: '100px' }}
               alt="LOGO HERE"
            />

            <div className="sec-section">
               <div className="menu-items">
                  <HashLink
                     smooth
                     to="#about-section">
                     about
                  </HashLink>
                  <HashLink
                     smooth
                     to="#reviews-section">
                     reviews
                  </HashLink>
                  <HashLink
                     smooth
                     to="#footer">
                     contact us
                  </HashLink>

               </div>

               <button type="button">
                  connect us
            </button>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
