import { useState } from 'react';
import axios from 'axios';
import { useHistory} from 'react-router-dom';

const useForm = (validate) => {

  const [, setIsSubmitting] = useState(false);
  const history = useHistory();

  
  //Register InputChange RegisterSubmit
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: '',
    contact: '',
  });

  const handleRegisterChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const Register = async (e) => {
    
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    try {
        await axios.post('http://localhost:5000/guests', {
          ...values
        })
        history.push('/login');  
    } catch (error) {
        if (error.response) {
            setMessage(error.response.data.msg);
        }
    }
  } 


  //Login InputChange, LoginSubmit
  const [login, setLogin] = useState(true);
  
  const [loginErrors, setLoginErrors] = useState({});
  const [loginValues, setLoginInput] = useState({  
    email: "",
    password:""
  });

  const handleLoginChange = event => {
    setLoginInput({
        ...loginValues, 
        [event.target.name]:event.target.value
    });
  }

  const Login = async (e) => {
    e.preventDefault();
    setLoginErrors(validate(loginValues));
    setIsSubmitting(true);
    
    try {
        await axios.post('/login', {
          ...loginValues
        })
        setLogin(true);
        history.push('/dashboards');  
        console.log(loginValues);
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.msg);
        }
    }
  }

  const Logout = async() =>{
    try {
      await axios.delete('/logout');
    } catch (error) {
      console.log(error);
    }
  }


  return { handleRegisterChange, handleLoginChange, Register, Login, Logout, values, loginValues, errors, loginErrors, login, message };
};

export default useForm;
