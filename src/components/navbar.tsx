import React from 'react'

interface Props {

}

const Navbar = (props: Props) => {
   return (
      <nav className="navbar">
         <div className="nav-inner">
            <img src="./asa.jpb" alt="LOGO HERE" />
            <button type="button">connect us</button>
         </div>
      </nav>
   )
}

export default Navbar
