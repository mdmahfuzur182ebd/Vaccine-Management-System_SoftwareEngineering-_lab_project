import React from 'react'
import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import { useState } from 'react';
import Pic1 from '../../assets/doctor.png';
import { ShoppingBag } from '@mui/icons-material';
import AdminLogin from '../Admin/AdminLogin';
import NurseLogin from '../Nurse/NurseLogin';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}

const Admin = () => {
    const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return <>
    <Grid container sx={{ height: '60vh' }}>
        <Grid item lg={7} sm={5} sx={{
            backgroundImage: `url(${Pic1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', sm: 'block' }
          }}>
        </Grid>

       <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                <Tab label='Admin Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                <Tab label='Nurse Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <AdminLogin />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <NurseLogin />
            </TabPanel>
          </Box>
          <Box textAlign='center' sx={{ mt: 2 }}>
            <ShoppingBag sx={{ color: 'purple', fontSize: 100 }} />
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Vaccine Management</Typography>
          </Box>
        </Card>
      </Grid>
      
    </Grid>
  </>;
};


export default Admin;