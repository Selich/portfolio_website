import React from "react";
import { useState, useEffect } from "react";

import Home from "./components/Home";
import Projects from "./components/Projects";

import AppBar from "@material-ui/core/AppBar";
import { Tabs, Tab } from "@material-ui/core"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';


import axios from "axios"

import "./App.css"


const routes = [
  Home
  //  "About",
  //  "Contact"
];

function App() {


  const [user, setUser] = useState({})


  useEffect(() => {
    axios.get("https://api.github.com/users/Selich")
    .then(res => { 
      setUser(res.data)
    })
  }, [])



  return (
    <Router>
      <AppBar position="static" color="default">
      <Tabs>
         <Tab label="Home" key="Home" component={Link} to="/home"> </Tab>
         <Tab label="Projects" key="Projects" component={Link} to="/projects"> </Tab>

      </Tabs>
      </AppBar>
     <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
        <Route path="/home" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
    </AnimatedSwitch>
    </Router>
  );
}

export default App;
