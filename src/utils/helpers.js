export function validateEmail(email) {
    var validate = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return validate.test(String(email).toLowerCase());
  }