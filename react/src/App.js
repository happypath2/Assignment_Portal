import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Header,StickyHeader } from "./components/primary"
import { LoginComponent, SideListitem } from "./components/store/"
const App = () => {
  return (
    <>
      <Container fluid={true}>
        <Row>
        <Col sm="4">
          </Col>  
          <Col className="secondarybg" xs="6" sm="4">
            <Header />
            <LoginComponent/>
      <StickyHeader/>

          </Col>
         
        </Row>
      </Container>
    </>
  )
}




export default App;
