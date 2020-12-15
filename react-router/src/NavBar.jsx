// import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Menu = () => {
   return (
      <>
       <div className="menu_style"> 
         <NavLink exact activeClassName="active_class" 
         to="/"> About Us</NavLink>
         <NavLink activeClassName="active_class" 
         to="/Service"> Services</NavLink>
         <br/>
         <NavLink activeClassName="active_class" 
         to="/Contact"> Contact Us</NavLink>
         <br/>

         <NavLink activeClassName="active_class" 
         to="/user/default/lname"> User</NavLink>
         <br/>
        
        </div>
      </>
   )
}

export default Menu;