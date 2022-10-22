import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <CookieConsent
          // debug
          style={
            { background: '#000',
              textAlign: 'left',
              fontSize: '16px',
              padding: '20px' }
          }
          buttonText="Aceitar"
          expires={ 30 }
          buttonClasses="btn"
        >
          Este site utiliza cookies para seu adequado funcionamento,
          análises, personalização e publicidade.
          Ao continuar navegando neste site você declara estar ciente destas condições.
        </CookieConsent>
        <main id="about">
          <Content />
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
