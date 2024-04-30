import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Options(props) {

    const navigate=useNavigate()
    const handleClick=()=>{
navigate(`/${props.title}`)
    }
  return (
    <div onClick={handleClick} style={{ display: 'flex',fontSize: '1.5vw', alignItems: 'center',cursor:'pointer' }}>
      <Box sx={{ marginRight: '.3vw' ,mt:'.3vw'}}>
        {props.img}
      </Box>
      <Typography sx={{color:props.selected===props.title?'rgba(96, 91, 255, 1)':'rgba(154, 154, 169, 1)',  fontSize: '1.5vw', textAlign: 'center',fontFamily:'Nunito' }}>
        {props.title}
      </Typography>
    </div>
  );
}

export default Options;
