import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider} from './firebase';

function Login() {

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className='login'>
      <div className='login__container'>
        <img 
          src='https://cdn.freebiesupply.com/logos/thumbs/2x/slack-logo-thumb.png' 
          alt='' 
        />
        <h1>Sign to Job alert</h1>
        <p>job-alert.slack.com</p>
        <Button>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
