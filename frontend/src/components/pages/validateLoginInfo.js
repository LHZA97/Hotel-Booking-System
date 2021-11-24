export default function validateInfo(loginValues) {
    let loginErrors = {};
  
    if (!loginValues.email) {
        loginErrors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(loginValues.email)) {
        loginErrors.email = 'Email address is invalid';
    }
  
    if (!loginValues.password) {
      loginErrors.password = 'Password is required';
    } else if (loginValues.password.length < 11) {
      loginErrors.password = 'Invalid password';
    }
  
    
  return loginErrors;
  }