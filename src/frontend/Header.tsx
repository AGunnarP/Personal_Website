import {Link} from "react-router-dom"

import "./Header.css"

function Header(){

    return(
    <div className="Header_Div">
        
        <h1>Anthony Page's Website</h1>
        <div className="Links_Container">

            <Link className="Nav_Link" to="/">Home</Link>
            <Link className="Nav_Link" to="/Developer">Developer</Link>
            <Link className="Nav_Link" to="/Tutor">Tutor</Link>


        </div>

    </div>

);

}

export default Header;