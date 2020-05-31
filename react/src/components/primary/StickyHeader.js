import React, { useState } from 'react';
import { Row, Col, Container, Button, Modal,Alert, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import {createPlaylistItem} from "../utility"
export const StickyHeader = () => {
  const [ismodal, setIsmodal] = useState(false)
  const [isemail, setIsemail] = useState(false);
  const [isfname, setIsfname] = useState(false);
  const [ispass, setIspass] = useState(false);
  const [isradio, setIsradio] = useState(false);


  const [islastname, setIslastname] = useState(false);
  const [alert, setAlert] = useState(false);


  const [error, setError] = useState(false);  

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const createPlaylist = (name) => {
let path = process.env.REACT_APP_SITE_URL ? process.env.REACT_APP_SITE_URL + "/adduser" : '';
const data = { username: ismodal,email:isemail,firstname:isfname,lastname:islastname ,password:ispass ,gender:isradio   };
setError(true)

fetch(path, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})


  }

  return (
    <>
      <Container fluid={true} className="stickyheader">
        <Row>
          <Col xs="6" sm="12">
            <h4 onClick={toggle} className="sednavbar">New User Click to Signup</h4>
          </Col>
        </Row>
       
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader>Signup</ModalHeader>
          {
          error === true ?  <p>Successfully Added</p> : ''
        }
          <ModalBody>
            <Form>
              <FormGroup>
                <Input  onChange={e => setIsmodal(e.currentTarget.value)} type="text" required name="username"  placeholder="Enter username" />
              </FormGroup>
              <FormGroup>
                <Input  onChange={e => setIspass(e.currentTarget.value)} type="password" required name="password"  placeholder="Enter password" />
              </FormGroup>
              <FormGroup>
                <Input  onChange={e => setIsemail(e.currentTarget.value)} type="text" required name="email"  placeholder="Enter email" />
              </FormGroup>
              <FormGroup>
                <Input  onChange={e => setIsfname(e.currentTarget.value)} type="text" required name="firstname"  placeholder="Enter firstname" />
              </FormGroup>
              <FormGroup>
                <Input  onChange={e => setIslastname(e.currentTarget.value)} type="text" required name="lastname"  placeholder="Enter lastname" />
              </FormGroup>
              <FormGroup >
        <FormGroup>
          <Label  check>
            <Input  onChange={e => setIsradio(e.currentTarget.value)} value='f' type="radio" name="radio1" />{' '}
           female
          </Label>
        </FormGroup>
        <FormGroup >
          <Label check>
            <Input   onChange={e => setIsradio(e.currentTarget.value)} value='m'  type="radio" name="radio1" />{' '}
         male
          </Label>
        </FormGroup>
    
      </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={createPlaylist.bind(this,ismodal)}>Signup</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      
      
      </Container>
    </>

  )
}


