// import { Button, CssBaseline, Grid, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import ChangePassword from '../User/Auth/ChangePassword';


// const VaccineRegistion = () => {
// const navigate = useNavigate()
//   const handleLogout = () => {
//     console.log("Logout Clicked");
//     navigate('/')
//   }
//   return <>
//     <CssBaseline />
//     <Grid container>
//       <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
//         <h1>Dashboard</h1>
//         <Typography variant='h5'>Email: sonam@gmail.com</Typography>
//         <Typography variant='h6'>Name: Sonam</Typography>
//         <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
//       </Grid>
//       <Grid item sm={8}>
//         <ChangePassword />
//       </Grid>
//     </Grid>
//   </>;
// };

// export default VaccineRegistion;

import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ChangePassword from '../User/Auth/ChangePassword';


const VaccineRegistion = () => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Vaccine Management System</Typography>

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Logout</Button>

          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>RegistrationInfo</Button>

          <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Logout</Button>

        </Toolbar>
      </AppBar>
      <Grid item sm={8}>
        <ChangePassword />
    </Grid>
    </Box>
  </>;
};

export default VaccineRegistion;