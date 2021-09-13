import { NavLink } from "react-router-dom"
import AddGame from "./AddGame"
import Menu from "../Menu"

function BaseLayout(props) {
    return (
        <div>
            <Menu /> 
            {props.children}
            <h1>A FOOTER WITH A BUNCH OF COOL STYLING</h1>
        </div>
    )
}

//export function Menu() {
  //  return (
    //    <div>
      //      <NavLink to = "/">Home</NavLink>
        //    <NavLink to = "/login">Login</NavLink>
          //  <AllGames />
        //</div>
    //)
//}



export default BaseLayout