import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import Header from './components/Header';
import CookieConsentComponent from './components/CookieConsentComponent';
import Content from './components/Content';
import Footer from './components/Footer';
import Background from './components/Background';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ContextProvider>
          <Header />
          <CookieConsentComponent />
          <main id="about">
            <Content />
          </main>
          <Footer />
          <Background />
        </ContextProvider>
      </BrowserRouter>
    );
  }
}

export default App;
