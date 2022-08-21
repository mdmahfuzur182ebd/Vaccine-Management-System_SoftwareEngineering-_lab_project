import { Box, TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';


const ChangePassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
    }
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("password-change-form").reset();
        setError({ status: true, msg: "Password Changed Successful", type: "success" });
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: "error" })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" })
    }
  };


  return <>
    <h5 style={{color:'green', marginTop:'10px', marginLeft:'360px'}}>Vaccine Registration Form</h5>
    
  </>;
};

export default ChangePassword;