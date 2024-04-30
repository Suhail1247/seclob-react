import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from '@mui/material';
import logo from '../../assets/logo.png';
import google from '../../assets/google.png';
import apple from '../../assets/apple.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AiFillTwitterCircle } from "react-icons/ai";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IoLogoDiscord } from "react-icons/io5";
import SignInOptions from './SignInOptions';
import FullWidthTextField from './TextField';
import { useNavigate } from 'react-router-dom';
import toast,{ Toaster } from 'react-hot-toast';

function Login() {
    const [formValues,setFormValues]=useState({});

    const navigate=useNavigate()
    const validateForm = () => {
      const errors = {};
  
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formValues.email || !formValues.email.trim()) {
          errors.email = "Email address is required";
      } else if (!emailRegex.test(formValues.email)) {
          errors.email = "Invalid email address";
      }
  
      // Password validation
      const specialCharRegex = /[@$!%*?&]/;
      const noSpaceRegex = /^\S*$/;
      if (!formValues.password || !formValues.password.trim()) {
          errors.password = "Password is required";
      } else if (formValues.password.length < 6) {
          errors.password = "Password must be at least 6 characters long";
      }if (!noSpaceRegex.test(formValues.password)) {
        errors.password = "Password must not contain any spaces";
    } else if (!specialCharRegex.test(formValues.password)) {
        errors.password = "Password must contain at least one special character";
    }
    
  
      return errors;
  };
  

  const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length === 0) {
          // Proceed with form submission
          navigate('/upload');
      } else {

          if (validationErrors.email) {
              toast.error(validationErrors.email);
          }
          if (validationErrors.password) {
              toast.error(validationErrors.password);
          }
      }
  };

  const handleChange = (e) => {
      const { name, value} = e.target;
      setFormValues((prevFormValues) => ({
          ...prevFormValues,
          [name]: value
      }));
  };

  const forgotPassword = () => {
      navigate('/forgotPassword');
  };
  return (
    <Box sx={{ height: '100vh' }}>
       <Toaster />
      <Grid container>
        <Grid xs={6}>
          <Box sx={{
            height: '100vh',
            backgroundColor: 'rgba(96, 91, 255, 1)',
            clipPath: 'polygon(0 0, 100% 0%, 80% 100%, 0% 100%)',
            position: 'relative', // Maintain relative positioning for the container
          }}>
            <Box sx={{ position: 'absolute', top: '1rem', left: '1rem' }}> {/* Adjust position for the image */}
              <img src={logo} alt="" style={{ width: '3.5vw', height: '7vh' }} />
            </Box>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-65%, -65%)',
              fontFamily: 'Montserrat',
              fontWeight: 700,
              fontSize: ['3.5vw', '4vw', '4.5vw'],
              textAlign: 'left',
              color: 'white'
            }}>
              BASE
            </Box>
            <Box sx={{
              position: 'absolute',
              bottom: '10vh', // Adjust the distance from the bottom as needed
              left: '15vw',
              textAlign: 'center',
              display: 'flex',
              width: '70vw', 
            }}>
              <Grid sx={{ mr: '1vw' }}><GitHubIcon sx={{ color: 'white', fontSize: '3vw' }} /></Grid>
              <Grid sx={{ mr: '1vw' }}><AiFillTwitterCircle style={{ color: 'white', fontSize: '3vw' }} /></Grid>
              <Grid sx={{ mr: '1vw' }}><LinkedInIcon sx={{ color: 'white', fontSize: '3vw' }} /></Grid>
              <Grid><IoLogoDiscord style={{ color: 'white', fontSize: '3vw' }} /></Grid>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6}>
  <Box sx={{ height: '100vh', }}>
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ height: '100%', width: '100%' }}>
      <Box sx={{ margin: 'auto' ,width:'60%'}}> 
      <Typography variant="h1" sx={{
         ml:1,
                fontFamily: 'Montserrat',
                fontSize: '2vw',
                fontWeight: 700,
                lineHeight: '2vw',
                textAlign: 'left',
              }}>Sign In</Typography>
              
              <Typography variant="h1" sx={{
                ml:1,
                fontFamily: 'Montserrat',
                fontSize: '1vw',
                fontWeight: 400,
                lineHeight: '2vw',
                textAlign: 'left',
              }}>Sign in to your account</Typography>
              <Box sx={{display:'flex',mt:1}}>
                <Typography sx={{ml:1,width:'50%'}}><SignInOptions img={google} title='Sign in with Google' /></Typography>
                <Typography sx={{ml:1,width:'50%'}}><SignInOptions img={apple} title='Sign in with Apple'/></Typography>
              </Box>
              <form onSubmit={handleSubmit}>
              <Box sx={{height:'auto' ,ml:1,mt:'1vw'}}>
                <Typography sx={{fontFamily:'Lato',mt:'.5vw',fontSize:'1.4vw'}}>
                Email address
                </Typography>
                <FullWidthTextField type='text'
                name='email'
                handleChange={handleChange}
                value={formValues.email}
              placeholder="Enter email"/>
<Typography sx={{fontFamily:'Lato',mt:'1vw',fontSize:'1.4vw'}}>
Password
                </Typography>
<FullWidthTextField type='password'
handleChange={handleChange}
                name='password'
                value={formValues.password}
              placeholder="Enter password"/>
              </Box>
              <Typography onClick={forgotPassword} sx={{fontFamily:'Lato',mt:2,ml:2,color:'rgba(52, 107, 212, 1)',cursor:'pointer',fontSize:'1.2vw'}}>
              Forgot password?
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button sx={{backgroundColor:'rgba(96, 91, 255, 1)',width:'100%'}} variant="contained" type='submit'>Sign In</Button>
                  </Box>
              </form>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Typography sx={{color:'rgba(133, 133, 133, 1)',fontSize:'1.2vw'}}>Don’t have an account?</Typography><Typography sx={{ml:1,color:'rgba(52, 107, 212, 1)', cursor:'pointer',fontSize:'1.2vw'}}> Register here</Typography>
                    </Box>
      </Box>
    </Box>
  </Box>
</Grid>

      </Grid>
    </Box>
  );
}

export default Login;
