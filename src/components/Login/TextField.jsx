import * as React from 'react';
import Box from '@mui/material/Box';


export default function FullWidthTextField(props) {
  return (
    <Box
      sx={{
        mt: props.noMragin? 0:'.5vw',
        width: '100%',
      }}
    >

      <input type={props.type} placeholder={props.placeholder} style={{outline:'none', border:'none',backgroundColor:'rgba(245, 245, 245, 1)', borderRadius:'10px',width:'90%',height:'2.5vw', fontFamily: 'lato',fontWeight:400,paddingLeft:'1vw',padding:'.4vw',fontSize:'1.3vw'}}
      onChange={props.handleChange}
      value={props.value}
      name={props.name}/>
    </Box>
  );
}
