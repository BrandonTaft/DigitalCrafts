

import { NavLink } from "react-router-dom";



function Menu() {
    return (
        <div>
            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/login">Login</NavLink>
            <NavLink to = "/AddGame">Click Here To Add A Game</NavLink>
            

            
        </div>
    )
}

export default Menu