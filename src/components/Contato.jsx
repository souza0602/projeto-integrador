import React from 'react'
import './Contato.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import logoContato from '../assets/logo-Contato.png'

function Contato() {
  return (
    <>
      <div className="container-fluid containerContato animate__animated animate__fadeInLeft animate__delay-1s">
        <img src={logoContato} alt="" />
      </div>
      <div className="container p-0 pt-5 animate__animated animate__fadeInLeft animate__delay-1s">
        <div className="row">
          <div className="col-sm-6 p-0">
            <p><b>Fale conosco</b></p>
            <h4>Contatos</h4>
            <h5>Email:</h5>
            <p>bvegan@gmail.com</p>
            <p><b>WhatsApp</b></p>
            <p>(11) 9999-9999</p>
          </div>
          <div className="col-sm-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Digite seu e-mail aqui</b></Form.Label>
                <Form.Control type="email" placeholder="E-mail" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><b>Nome:</b></Form.Label>
                <Form.Control type="text" placeholder="Nome" />
              </Form.Group>
              <InputGroup className='input-texto'>
                <InputGroup.Text className=''><b>Digite seu texto aqui</b></InputGroup.Text>
                <Form.Control as="textarea" placeholder='Digite aqui' aria-label="With textarea" />
              </InputGroup>
              <Button className='mt-3' variant="dark" type="submit">
                Enviar
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contato