import React, { useContext, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import AlertContactSucess from '../components/AlertContactSucess';
import Context from '../context/Context';

export default function Contact() {
  const { sumitForm } = useContext(Context);
  useEffect(() => {
    document.title = 'Contato - Felipe Seabra';
  });

  return !sumitForm ? <ContactForm /> : <AlertContactSucess />;
}
