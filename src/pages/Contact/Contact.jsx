import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import { ContactForm, AlertContactSuccess } from '../../components';

export default function Contact() {
  const { submitForm } = useContext(Context);

  function setPageTitle() {
    document.title = 'Contato - Felipe Seabra';
  }

  useEffect(setPageTitle, []);

  return submitForm ? <AlertContactSuccess /> : <ContactForm />;
}
