import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Error from "./Components/Error";
import { Route, Switch } from "react-router-dom";

import Store from "./Components/Freestore";
import Needy from "./Components/Needy";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About.js";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Donate from "./Components/Donate";

function App() {
  {
    // document.body.style.overflow = "auto";
    document.body.style.overflow = "hidden";
    // document.body.style.height = "100vh";
    // document.body.style.minHeight = "40vh";
    // document.body.style.maxHeight = "85vh";
  }
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}

      {/* <Card style={{ width: '34rem' ,border:'none'}}>
  <Card.Img  class="card-img-"   src={card_pic}  style={{ width: "100%" }}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/needy" component={Needy} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/donate" component={Donate} />

        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
