import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

const Signup = () => {
  const [credentials, setCredentials] = useState({ name:"",lname:"", email: "", password: "",cpassword:"" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   const {name,lname,email,password}=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,lname,email,password
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

    {/* <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
      The best offer <br />
      <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
    </h1> */}
<MDBCol col="4" md="11">
            <img
              src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1710067077~exp=1710067677~hmac=ad54df91bb0a17e6c6b2acfb9b75dc81295e0ff295888b9b40bb7aae33c62bda"
              className="img-fluid"
              alt="Phone image"
            />
          </MDBCol>
   

  </MDBCol>


  <MDBCol md='6' className='position-relative'>
<form onSubmit={handleSubmit}>
    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <MDBCard className='my-5 bg-glass'>
      <MDBCardBody className='p-5'>
        <MDBRow>
          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='First name' id='name' name='name' onChange={onChange} type='text'/>
          </MDBCol>

          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='Last name' id='lname' name='lname' onChange={onChange} type='text'/>
          </MDBCol>
        </MDBRow>

        <MDBInput wrapperClass='mb-4' label='Email' name='email' id='email' onChange={onChange} type='email'/>
        <MDBInput wrapperClass='mb-4' label='Password'name='password' id='password' onChange={onChange} type='password' minLength={6}required/>
        <MDBInput wrapperClass='mb-4' label='Confirm Password' id='cpassword'name='cpassword' onChange={onChange} type='password' minLength={6}required/>


        <MDBBtn className='w-100 mb-4' size='md'>Register</MDBBtn>
 

        <a href="!#">Already a user? <button>login</button></a>
        
      </MDBCardBody>
    </MDBCard>
    </form>
  </MDBCol>

</MDBRow>

</MDBContainer>
    </div>
  )
}

export default Signup
