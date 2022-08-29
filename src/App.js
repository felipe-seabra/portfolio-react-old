import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import image from "./images/image.jpg";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {/* <About image={image} />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
