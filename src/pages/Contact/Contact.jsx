import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import { ContactForm, AlertContactSuccess } from '../../components';
import setPageTitle from '../../utils/setPageTitle';

export default function Contact() {
  const { submitForm } = useContext(Context);

  useEffect(() => {
    setPageTitle('Contato - Felipe Seabra');
    console.log(submitForm);
  }, []);

  return submitForm ? <AlertContactSuccess /> : <ContactForm />;
}
