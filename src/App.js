import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
