import { Route,Switch } from "react-router-dom";
import Contact from "./Contaxt";
import About from "./About";
import Error from "./Error";
import Menu from "./NavBar";
import Service from "./Services";
import User from "./User";
import Search from "./Search";

function App() {

  return (
    <>
       <Menu></Menu>
        {/* <Switch>
           <Route exact path="/" component={About} />
           <Route path="/service" component={Service} />
           <Route path="/contact" component={Contact} />
           <Route component={Error}/>
        </Switch> */}
        <Switch>
           <Route exact path="/" component={ () => <About name="About"/> } />
           <Route path="/service" render={ () => <Service name="Services"/> }/>
           <Route path="/contact" component={Contact} />
           <Route path="/user/:name/:lname" component={User} />
           <Route path="/search" component={Search} />
           <Route component={Error}/>
        </Switch>
    </>
  );
}

export default App;
