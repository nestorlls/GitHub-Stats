function validate(values) {
  const errors = {};

  errors.email = validateMail(values.email);
  errors.password = validatePassword(values.password);

  return errors;
}

function validateMail(mail) {
  let message = '';
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    message = 'Invalid email';
  }

  if (!mail) {
    message = 'Required';
  }

  return message;
}

function validatePassword(password) {
  let message = '';
  if (password.length <= 6) {
    message = 'At least 6 chacarters long';
  }

  if (!password) {
    message = 'Required';
  }

  return message;
}

export { validate };
