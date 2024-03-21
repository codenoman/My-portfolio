import React from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import "./rate.css"
function login(){
return(

<>

<div className="mainbox">
    <div className="boxone">
<h5 className="pratetwo">Welcome! Please Login to continue.</h5>
<h6 className="prate">New Member? register here</h6>


<Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Your Email or Phone Number" id="fullWidth" />
    </Box>
<br />
<br />

    <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <br /><br />
        <Button variant="contained" color="success">
  Login
</Button>
<br />
<br />
<Button variant="contained" >
  < FacebookIcon></FacebookIcon>login with facebook
</Button>
<br />
<br />
<Button variant="outlined"><GoogleIcon></GoogleIcon>login with Google</Button>
        
        </div>
<div className="boxtwo">
</div>
</div>







</>



)

}
export default login;