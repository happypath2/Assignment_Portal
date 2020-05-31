import React, { useState } from 'react';
import { Row,Col,Form,FormGroup,Label,Input,Button } from 'reactstrap';
export const LoginComponent = () => {
  const [isemail, setIsemail] = useState(false)
  const [iserror, setIserror] = useState(false)

  const [ispass, setIspass] = useState(false)
  const [islogin, setIslogin] = useState()


  const checkLogin = () => {
let path = process.env.REACT_APP_SITE_URL ? process.env.REACT_APP_SITE_URL + "/users" : '';
  fetch(path).then(res => res.json()).then((res) => {
    let data=res.filter((r) =>(r.email === isemail && (r.password === ispass)))
   if(data.length > 0){
setIslogin(data[0])
setIserror(false)

   }else{
    setIserror(true)
   }
  })
}
    return (
        <>
            <Row>
               
                <Col xs="6" sm="12">
              
                {
                  islogin && (islogin !== false) ? 
                  <>
<h2>Welcome {islogin.username}</h2>
<h3>Email Address: {islogin.email}</h3>
<h3>Country: {islogin.country}</h3>
<h3>Name: {islogin.firstname} {islogin.lastname}</h3>
<h3>Gender: {islogin.gender}</h3>
<h3>Country: {islogin.country}</h3>




                  </>
                  :   
                  
                  <Form>
               {
                  iserror && (iserror !== false) ? 
                  <div className="error"> email or password is incorrect</div>
               : '' }
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input onChange={e => setIsemail(e.currentTarget.value)}  type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input onChange={e => setIspass(e.currentTarget.value)}   type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                  </FormGroup>
                  <Button onClick={checkLogin} >Login</Button>
                  </Form>
                }
               </Col>
            </Row>


        </>

    )
}


