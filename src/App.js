import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>    
          <Header />
        <main id="about">
          <Content />
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
