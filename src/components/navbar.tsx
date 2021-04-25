import React from 'react'

interface Props {

}

const Navbar = (props: Props) => {
   return (
      <nav className="navbar">
         <img src="./asa.jpb" alt="LOGO HERE" />
         <button type="button">CONNECT US</button>
      </nav>
   )
}

export default Navbar
