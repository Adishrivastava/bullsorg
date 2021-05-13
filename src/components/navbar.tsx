import React from 'react'

interface Props {

}

const Navbar = (props: Props) => {
   return (
      <nav className="navbar">
         <div className="nav-inner">
            <img src="/assets/logos/logoBig.png" style={{ width: '100px' }} alt="LOGO HERE" />
            <button type="button">connect us</button>
         </div>
      </nav>
   )
}

export default Navbar
