// import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Menu = () => {
   return (
      <>
       <div className="menu_style"> 
         <NavLink exact activeClassName="active_class" 
         to="/"> Profile</NavLink>
         <NavLink activeClassName="active_class" 
         to="/Search"> Search</NavLink>
         <br/>
         
        
        </div>
      </>
   )
}

export default Menu;