import { Box } from '@mui/system'
import React from 'react'

function SignInOptions(props) {
  return (
    <div>
        <Box sx={{display:'flex'}}>

            <img src={props.img} style={{marginRight:'.5vw',width:'1.5vw',height:'1.5vw'}} alt="" />


            <span style={{
  fontFamily: 'Montserrat',
  fontSize: '1vw',
  fontWeight: 400,
//   lineHeight: '14.63px',
  textAlign: 'center',
  color:'rgba(133, 133, 133, 1)'
}}>{props.title}</span>
        </Box>
    </div>
  )
}

export default SignInOptions