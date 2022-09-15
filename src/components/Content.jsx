import React from "react";
import { Routes, Route, } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";
import Error404 from "./Error404";

export default class Content extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    );
  }
}
