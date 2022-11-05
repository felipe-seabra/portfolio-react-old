import React from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../styles/index.css';
import '../styles/pages/Contact.css';
import AlertContactSucess from '../components/AlertContactSucess';

export default class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    sub: false,
  };

  componentDidMount() {
    document.title = 'Contato - Felipe Seabra';
  }

  handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  handleFormSubmit = () => {
    this.setState({ sub: true });
  };

  verifyBtn = () => {
    const { name, email, message } = this.state;
    const num = 3;
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return !(name.length >= num && emailRegex.test(email) && message.length > num);
  };

  sendEmail = (e) => {
    // const { name, email, message } = this.state;
    // const form = useRef();
    e.preventDefault();
    emailjs.sendForm('umbler', 'template_0s5hb6j', e.target, 'pQs69XqnkBggTWGIR')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    this.handleFormSubmit();
  };

  render() {
    const { name, email, message, sub } = this.state;
    return !sub ? (
      <div className="background-color-grey">
        <h2 className="text-center mb-5 title-form">Formulário de contato</h2>
        <Form className="container form" onSubmit={ this.sendEmail }>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Nome completo"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Nome completo"
                value={ name }
                name="name"
                onChange={ this.handleChange }
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="E-mail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={ email }
                name="email"
                onChange={ this.handleChange }
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Deixe sua mensagem aqui"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Deixe sua mensagem aqui"
                style={ { height: '100px' } }
                value={ message }
                name="message"
                onChange={ this.handleChange }
                required
              />
            </FloatingLabel>
          </>
          <Button
            variant="primary"
            type="submit"
            className="btn"
            value="Send"
            disabled={ this.verifyBtn() }
          >
            Enviar
          </Button>
        </Form>
      </div>
    ) : <AlertContactSucess />;
  }
}
