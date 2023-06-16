function validate(values) {
  const errors = {};

  errors.email = validateMail(values.email);
  errors.password = validatePassword(values.password);
  errors.first_name = validateFirstName(values.first_name);
  errors.last_name = validateLastName(values.last_name);

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
  if (password.length <= 5) {
    message = 'At least 6 chacarters long';
  }

  if (!password) {
    message = 'Required';
  }

  return message;
}

function validateFirstName(first_name) {
  let message = '';
  if (!first_name) {
    message = 'Required';
  }
  return message;
}

function validateLastName(last_name) {
  let message = '';
  if (!last_name) {
    message = 'Required';
  }
  return message;
}

export { validate };
