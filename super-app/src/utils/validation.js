export const validateForm = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.username.trim()) {
    errors.username = "Username is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email";
  }

  if (!values.mobile.trim()) {
    errors.mobile = "Mobile number is required";
  } else if (!/^[6-9]\d{9}$/.test(values.mobile)) {
    errors.mobile = "Invalid mobile number";
  }

  return errors;
};