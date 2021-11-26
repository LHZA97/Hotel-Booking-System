export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Username required';
  }

  if (!values.contact.trim()) {
    errors.contact = 'Contact required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 11) {
    errors.password = 'Password needs to be 10 characters or more';
  }

  if (!values.confPassword) {
    errors.confPassword = 'Password is required';
  } else if (values.confPassword !== values.password) {
    errors.confPassword = 'Passwords do not match';
  }
return errors;
}


