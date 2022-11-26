import React from 'react';
import CookieConsent from 'react-cookie-consent';

function CookieConsentComponent() {
  return (
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
  );
}

export default CookieConsentComponent;
