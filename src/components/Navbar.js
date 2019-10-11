import React from 'react'

import NavbarBrand from './NavbarBrand'

function Navbar (props){
   return(

            <nav className="navbar navbar-expand-lg">
                <NavbarBrand
                to="/"
                text="holas"
                />
            </nav>
   )
}

export default Navbar