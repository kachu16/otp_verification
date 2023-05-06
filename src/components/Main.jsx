import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const [number , setNumber] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/otp', {
      state : {
        mynum: number
      },
    });

  }

  const handleChange = e => {
    setNumber(e.target.value);
  }


  return (
    <form id="form" className='box' onSubmit={handleSubmit}>
    <div  className="container">
    <h1>OTP Verification Form</h1>

    <hr/>

    <h2>Personal Details</h2>

    <p>First Name: *<input className='input-field' type="text" name="fname"  placeholder="Enter your First Name" required/></p>
    <p>Last Name: *<input className='input-field' type="text" name="lname" placeholder="Enter your Last Name" required/></p>

    <p>Mobile: *<input onChange={handleChange} className='input-field' type="number" name="mobile" id="mobile" placeholder="Enter your Phone Number" required/></p>
    
    <p className='btn-para'><button type='submit'>Submit</button></p>
    </div>

  </form>
  )
}

export default Main
