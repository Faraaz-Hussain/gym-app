import React from "react";
import "./login.css";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="container">
      <div className="image"></div>
      <div className="text-box">
      <Avatar style={{marginTop:"30px",marginLeft:"110px"}} src="/broken-image.jpg"  sx={{ width: 75, height: 75 }} />
        <TextField  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }} style={{marginLeft:"40px",marginTop:"50px"}} id="outlined-basic" label="username" variant="standard" />
        <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }} style={{marginLeft:"40px",marginTop:"30px"}} id="outlined-basic" label="password" variant="standard" type="password" />
        <Link style={{lineHeight:"2",marginLeft:"35px",display:"inline",fontSize:"15px",textDecoration:"none"}} to="register">Create Account</Link>
        <a style={{marginLeft:"35px",display:"inline",fontSize:"15px",textDecoration:"none"}} href="#">Forgot Password?</a>
        <Button style={{marginTop:"20px",marginLeft:"30px",height:"38px",width:"245px",borderRadius:"25px"}} variant="contained" color="success" >
        LOGIN
      </Button>
      <div>
           <AppleIcon style={{height:"90px",width:"45px",marginLeft:"125px",color:"black"}}/>
           <FacebookIcon style={{height:"82px",width:"40px",marginLeft:"10px",color:"black" }}/>
           <GoogleIcon style={{height:"78px",width:"35px",marginLeft:"13px",color:"black"}} />
      </div>
      </div>
    </div>
  );
}

export default Login;
