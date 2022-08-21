import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import VaccineRegistrationForm from './Auth/VaccineRegistrationForm';


const VaccineRegistion = () => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Vaccine Management System</Typography>

          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Registration-Print-Copy</Button>

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Logout</Button>

        </Toolbar>
      </AppBar>
      <Grid item sm={8}>
        <VaccineRegistrationForm />
    </Grid>
    </Box>
  </>;
};

export default VaccineRegistion;