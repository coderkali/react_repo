import { Route,Switch } from "react-router-dom";
import Profile from "./Profile";
import Menu from "./NavBar";


function App() {
   return (
      <> 
        <Menu></Menu>

         <Switch>
            <Route exact path="/" component={ () => <Profile name="Profile" /> } ></Route>
            
         </Switch>

      </>
   );
}

export default App;
