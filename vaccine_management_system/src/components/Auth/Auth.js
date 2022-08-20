import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import Input from './Input';




const Auth = () => {
    const classes = useStyles();
    const [showPassword,  setShowPassword ] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )

     const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
        
     };

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };


  return (
     <Container component='main' maxWidth=''> 
            <h1 style={{color:'white'}}>Welcome To User Login</h1>
          
        <Paper className={classes.paper} elevation={3}>
           <Avatar className={classes.avatar} >
              <LockOutlinedIcon />
           </Avatar>
           <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}> 
                    {isSignup && (
                            <>
                              <Input name= 'firstName' label='First Name' handleChange={handleChange} autoFocus half />
                              <Input name= 'lastname' label='Last Name' handleChange={handleChange} half />
                            </>
                     )}
                       <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                       <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                       { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                </Grid>
                     <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{ isSignup ? 'Sign Up' : 'Sign In' }
                     </Button>
                   

                 <Grid container justify="flex-end">
                     <Grid item>
                        <Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                        </Button>
                    </Grid>
               </Grid>
            </form>
        </Paper>
     </Container>
  )
}

export default Auth