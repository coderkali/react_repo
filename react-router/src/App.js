import { Route,Switch } from "react-router-dom";
import Contact from "./Contaxt";
import About from "./About";
import Error from "./Error";
import Menu from "./NavBar";

function App() {

  return (
    <>
       <Menu/>
        <Switch>
           <Route exact path="/" component={About} />
           <Route path="/contact" component={Contact} />
           <Route component={Error}/>
        </Switch>
    </>
  );
}

export default App;
