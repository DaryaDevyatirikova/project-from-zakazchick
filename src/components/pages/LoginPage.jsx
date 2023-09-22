import axios from 'axios';
import React, { useState } from 'react';
import { Col, Modal, Nav, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginPage() {
  // const [err, setErr] = useState(null);

  // const handleClose = () => setErr(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const res = await axios.post('/api/auth/login', data);
      if (res.status === 200) window.location = '/';
    } catch (error) {
      // setErr(error.response.data.message);
      console.log(error);
    }
  };
  return (
    // <>
    // <div>
      
    // </div>
    //   <Form onSubmit={submitHandler}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control type="email" name="email" placeholder="Enter email" />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control type="password" name="password" placeholder="Password" />
    //     </Form.Group>

      //   <Row className="justify-content-center mt-3 mb-3 text-center">
      //     <Col>
      //       <Button variant="primary" type="submit">
      //         Submit
      //       </Button>
      //     </Col>
      //   </Row>
      // </Form>
      // <Modal show={!!err} onHide={handleClose}>
      //   <Modal.Header closeButton>
      //     <Modal.Title>Error!</Modal.Title>
      //   </Modal.Header>
      //   <Modal.Body>{err}</Modal.Body>
      //   <Modal.Footer>
      //     <Button variant="secondary" onClick={handleClose}>
      //       Close
      //     </Button>
      //   </Modal.Footer>
      // </Modal>
     <>
      <div className="background">
      <div className="shape" />
      <div className="shape" />
    </div>
    <form className="form" onSubmit={submitHandler}>
      <h3 className="formh3">Login Here</h3>

      <label className="formtext lbl" >Username</label>
      <input className="formtext forminput inp" type="email" name="email" placeholder="Enter email" />
 {/** inputs: name="", на бэке актуализировать проверку данных с формы */}
      <label className="formtext"  type="password"  placeholder="Password">Password</label>
      <input className="formtext forminput inp" name="password" type="password" placeholder="Password" id="password" />

      <button type='submit' className="btn">Log In</button>
      <div className="social">
        <div className="go"><i className="fab fa-google" />  Google</div>
        <div className="fb"><i className="fab fa-facebook" />  Facebook</div>
      </div>
    </form>
    </>
  );
}
