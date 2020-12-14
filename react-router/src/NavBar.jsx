// import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Menu = () => {
   return (
      <>
         <NavLink exact activeClassName="active_class" 
         to="/"> About Us</NavLink>
         <NavLink activeClassName="active_class" 
         to="/Contact"> Contact Us</NavLink>
         <br/>
        <a href="/"> About Us</a>
        <a href="/Contact"> Contact Us</a>

      </>
   )
}

export default Menu;