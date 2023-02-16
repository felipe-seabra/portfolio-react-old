import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import { ContactForm, AlertContactSucess } from '../../components';

export default function Contact() {
  const { sumitForm } = useContext(Context);
  useEffect(() => {
    document.title = 'Contato - Felipe Seabra';
  }, []);

  return !sumitForm ? <ContactForm /> : <AlertContactSucess />;
}
