import React from "react";
import { Switch, Route, } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";

export default class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    );
  }
}
