import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Context from "./Context";
import "./main.css";

import Register from "./Register";
function Main() {
  return (
    <div>
      <BrowserRouter>
     
        <nav >
       
          <ul>
            <li>
              <Link to="/" class="nav">Home</Link>
            </li>
            <li>
              <Link to="/Context" class="nav">Context</Link>
            </li>
            <li>
              <Link to="/About" class="nav">About</Link>
            </li>
            <li>
              <Link to="/register" class="nav">Register</Link>
            </li>

          </ul>
        </nav>

        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/Context"> <Context /></Route>
          <Route path="/About"> <About /> </Route>
          <Route path="/rigister"><Register></Register></Route>

        </Switch>
      </BrowserRouter>
    </div >
  )
}
export default Main;