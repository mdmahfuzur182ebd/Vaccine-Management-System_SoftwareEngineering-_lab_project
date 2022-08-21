import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Grid, Card } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const VaccineRegistrationForm = () => {
  

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
      tc: data.get('tc'),
    }


    if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById('registration-form').reset()
        setError({ status: true, msg: "Registration Successful", type: 'success' })
        navigate('')
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }


  
  return <>
    <h1 style={{color:'grey', marginInlineStart:410, marginTop:10, marginBottom:10, }}>Vaccine Registration</h1>

  <Grid container sx={{ height: '95vh' , marginLeft:30}}>
      <Grid item lg={7} sm={5} xs={12}>
        <Card sx={{ width: '100%', height: '100%' }}>
        <Box sx={{ mx: 2, height: 530 }} id='registration-form' onSubmit={handleSubmit}>
          <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
          <TextField margin='normal' required fullWidth id='nid' name='nid' label='NID' />
          <TextField margin='normal' required fullWidth id='contactnumber' name='contactnumber' label='Contact-Number' />
          <TextField margin='normal' required fullWidth id='gender' name='gender' label='Gender' />
          <TextField margin='normal' required fullWidth id='name' name='name' label='Date of Birth' />
          <TextField margin='normal' required fullWidth id='name' name='name' label='Occupation' />
          <TextField margin='normal' required fullWidth id='name' name='name' label='Info on Past Diseases' />
          <TextField margin='normal' required fullWidth id='name' name='name' label='Present Address' />
          <TextField margin='normal' required fullWidth id='name' name='name' label='From where willing to get Vaccinated' />
          <TextField margin='normal' required fullWidth id='date' name='date' label='Registration Date' />
          <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
          <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Submit</Button>
          </Box>
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
          
        </Box>
      </Card>
    </Grid>
   </Grid>
  </>;
};

export default VaccineRegistrationForm;